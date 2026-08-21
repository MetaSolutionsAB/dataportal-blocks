import { publishListCount } from './listCount.js';

const DEFAULT_SORT = 'modified+desc';

/**
 * The limit is a contract, not a suggestion: every call site in this bundle passes one,
 * so an unusable value is a wiring mistake rather than something to paper over with a
 * fallback. Throwing surfaces it as an empty list plus a console error from the list
 * block, instead of a page that quietly renders some other number of rows.
 */
const resolveLimit = (conf) => {
  const limit = Number(conf.limit);
  if (!Number.isInteger(limit) || limit < 1) {
    throw new TypeError(
      `listEntries: limit must be a positive integer, got ${JSON.stringify(conf.limit)}.`
    );
  }
  return limit;
};

/**
 * `'title'` expands to a locale-qualified sort field, as it does in the runtime. The
 * locale comes from the registry rather than from `page_language` directly: the runtime
 * resolves the page language to a supported locale at boot and publishes the result as
 * `defaultLocale`, then keeps `locale` in step when a single-page app changes language,
 * so reading these two in that order tracks the language the titles are actually
 * indexed under.
 */
const resolveSort = (conf, registry) => {
  if (conf.sortOrder === 'title') {
    const locale = registry.get('locale') || registry.get('defaultLocale');
    if (locale) {
      return `title.${locale}+asc`;
    }
    console.warn(
      'listEntries: no locale is registered, so sorting by the default order rather than by title.'
    );
  } else if (conf.sortOrder) {
    return conf.sortOrder;
  }
  return registry.get('blocks_sortOrder') || DEFAULT_SORT;
};

/** Ask Solr for one page and read the true hit count off the same response. */
const fromQuery = async (entry, conf, registry, limit) => {
  const query = registry.get('entrystore').newSolrQuery();
  query.limit(limit);
  if (conf.relationinverse) {
    query.uriProperty(conf.relationinverse, entry.getResourceURI());
  }
  if (conf.rdftype) {
    query.rdfType(conf.rdftype);
  }
  if (registry.get('blocks_forcePublicRequests') !== false) {
    query.publicRead();
  }
  query.sort(resolveSort(conf, registry));
  const list = query.list();
  // getSize() is the total number of hits, not the page length, but only once a page has
  // been fetched — so the order of these two lines matters.
  const rows = await list.getEntries(0);
  return { rows, total: list.getSize() };
};

/**
 * Follow a relation out of the entry's own metadata and filter the targets by type here.
 *
 * The runtime does this with a Solr query while there are at most ten targets and with a
 * plain load beyond that, and the load drops `rdftype` on the way — which is why a type
 * filter on a relation silently stopped working on the eleventh value (BLOCKS-323). One
 * path, applied at any count, keeps the two type-partitioned lists of one relation
 * agreeing with each other.
 */
const fromRelation = async (entry, conf, registry, limit) => {
  const uris = [
    ...new Set(
      entry
        .getAllMetadata()
        .find(entry.getResourceURI(), conf.relation)
        .filter((stmt) => stmt.getType() === 'uri')
        .map((stmt) => stmt.getValue())
    ),
  ];
  if (uris.length === 0) {
    return { rows: [], total: 0 };
  }
  // loadEntriesByResourceURIs tolerates misses, leaving falsy holes in the array.
  const loaded = (
    await registry
      .get('entrystoreutil')
      .loadEntriesByResourceURIs(uris, undefined, true)
  ).filter(Boolean);

  const types = conf.rdftype ? [].concat(conf.rdftype) : [];
  const matching = types.length
    ? loaded.filter((loadedEntry) =>
        types.some(
          (type) =>
            loadedEntry
              .getAllMetadata()
              .find(loadedEntry.getResourceURI(), 'rdf:type', type).length > 0
        )
      )
    : loaded;

  // The query path sorts server-side; sort here too so both paths agree. Only the
  // default order is reproducible without a query, so anything else is refused rather
  // than silently ignored.
  if (conf.sortOrder) {
    console.warn(
      `listEntries: sortOrder "${conf.sortOrder}" cannot be applied when following ${conf.relation}; using ${DEFAULT_SORT}.`
    );
  }
  matching.sort(
    (a, b) =>
      b.getEntryInfo().getModificationDate() -
      a.getEntryInfo().getModificationDate()
  );
  return { rows: matching.slice(0, limit), total: matching.length };
};

/**
 * Build the rows for a `list` block, capped at `limit`, and publish the uncapped count.
 *
 * Written to be used as a list block's `entries` value, so its signature is the one the
 * runtime calls. Handing the list no more rows than fit on a page is what suppresses
 * pagination — the list treats `limit` as a page size and paginates the remainder, which
 * is the behaviour these inline lists are meant to replace.
 *
 * Because the rows are capped, the list's own `resultsize` reports the capped number.
 * The real total is therefore published here instead, under `defineCount`, in the shape
 * the `results` block renders: a `*Header` block keeps its existing `use` and
 * `count=resultsize` and shows the true total. `truncated` rides along for the "show all"
 * control, once there is a search URL to send it to.
 *
 * Two row sources, chosen by whether `relation` is set. Neither reads the runtime's
 * internal global filter, and neither applies `constraints`, so a list needing either
 * must stay on the runtime's own query path. `sortOrder` reaches only the query source;
 * the relation source can reproduce the default order without a query and refuses
 * anything else.
 *
 * @param {object} entry - the block's entry, as passed by the list block
 * @param {object} conf - the merged block configuration; reads `limit`, `relation`,
 *   `relationinverse`, `rdftype`, `sortOrder` and `defineCount`
 * @param {object} registry - the Blocks registry
 * @returns {Promise<Array<object>>} at most `limit` entries
 */
export const listEntries = async (entry, conf, registry) => {
  const limit = resolveLimit(conf);
  if (!conf.relation && !conf.relationinverse && !conf.rdftype) {
    throw new TypeError(
      'listEntries: needs one of relation, relationinverse or rdftype; refusing to query for everything.'
    );
  }
  if ((conf.relation || conf.relationinverse) && !entry) {
    throw new TypeError(
      `listEntries: ${conf.relation || conf.relationinverse} needs an entry to follow it from, and none was resolved.`
    );
  }

  const { rows, total } = conf.relation
    ? await fromRelation(entry, conf, registry, limit)
    : await fromQuery(entry, conf, registry, limit);

  publishListCount(registry, conf, rows, total);
  return rows;
};
