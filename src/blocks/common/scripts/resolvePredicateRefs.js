/**
 * Resolve the values of a predicate into renderable references.
 *
 * Each statement becomes exactly one descriptor, in metadata order, so a caller
 * can render a mixed set without dropping any:
 *
 * - `{ label, uri }` — a URI offered as a static choice by one of the `choiceItems`
 *   (e.g. `rdfs:Literal`, `xsd:date`); the label comes from the loaded template
 *   bundle, localised for the page language. `uri` is carried so a caller can fall
 *   back to it when the label does not localise.
 * - `{ entry }` — a URI resolving to an entry in this EntryStore instance (never
 *   attempted when `resolve` is off, i.e. for a predicate whose values are external
 *   references by definition).
 * - `{ uri, href }` — a URI that is neither; `href` is set only for http(s).
 * - `{ text }` — the object is a literal. Expected on `rdfs:seeAlso`, which mixes
 *   URIs and literals; on a predicate whose range is a class it means the data is
 *   malformed, and rendering it is what makes that visible.
 * - `{ composite: true }` — the object is a blank node, i.e. a structure such as
 *   `owl:unionOf`. Its identifier means nothing to a reader and this does not
 *   walk the structure, so a caller should render a placeholder.
 *
 * Order matters for the URI cases: a value a template offers as a choice is a
 * generic or datatype value, so it must not be mistaken for a resource that happens
 * to be indexed locally under the same URI.
 *
 * Choices are looked up per **named item** rather than through the runtime's
 * `itemstore_choices` map, which is keyed by value alone: `rdfs.json` gives
 * `rdfs:Resource` two different labels ("Generic" under `rdfs:domainGeneric`,
 * "Resource" under `rdfs:rangeGeneric`) and that map can only hold one, so the
 * domain row would render the range label. `itemstore` is a Blocks-internal registry
 * key, but `getItem`/`getChoices` are rdforms' own API.
 *
 * @param {object} registry - the block registry passed to a before-script
 * @param {object} entry - the entry whose metadata is read
 * @param {string} predicate - the predicate whose values are resolved
 * @param {object} [options] - resolution options
 * @param {string[]} [options.choiceItems=[]] - RDForms item ids whose static choices
 *   supply labels for this predicate's values
 * @param {boolean} [options.resolve=true] - look URI values up as local entries
 * @param {string} [options.excludeType=''] - skip resolved entries carrying this
 *   `rdf:type`, for a predicate whose values can collide with another entry that
 *   shares the resource URI
 * @returns {Promise<Array<object>>} one descriptor per statement, in metadata order
 */
export const resolvePredicateRefs = async (
  registry,
  entry,
  predicate,
  { choiceItems = [], resolve = true, excludeType = '' } = {}
) => {
  const stmts = entry.getAllMetadata().find(entry.getResourceURI(), predicate);

  const itemstore = registry.get('itemstore');
  const localize = registry.get('localize');
  const val2choice = new Map();
  choiceItems.forEach((id) => {
    const item = itemstore && itemstore.getItem(id);
    if (!item) {
      console.warn(
        `resolvePredicateRefs: no RDForms item '${id}' for ${predicate}; its values will render as plain URIs.`
      );
      return;
    }
    // getChoices() namespace-expands static choice values, so they match the raw
    // statement values compared below.
    (item.getChoices() || []).forEach((choice) =>
      val2choice.set(choice.value, choice)
    );
  });

  const uris = [
    ...new Set(
      stmts
        .filter((stmt) => stmt.getType() === 'uri')
        .map((stmt) => stmt.getValue())
    ),
  ];
  const toLoad = resolve ? uris.filter((uri) => !val2choice.has(uri)) : [];
  const loaded = toLoad.length
    ? await registry
        .get('entrystoreutil')
        .loadEntriesByResourceURIs(toLoad, undefined, true)
    : [];
  // loadEntriesByResourceURIs tolerates misses, leaving falsy holes in the array.
  const byURI = new Map();
  loaded.filter(Boolean).forEach((e) => {
    const excluded =
      excludeType &&
      e.getAllMetadata().find(e.getResourceURI(), 'rdf:type', excludeType)
        .length > 0;
    if (excluded) return;
    if (byURI.has(e.getResourceURI())) {
      console.warn(
        `resolvePredicateRefs: several local entries match ${e.getResourceURI()} for ${predicate}; using the first.`
      );
      return;
    }
    byURI.set(e.getResourceURI(), e);
  });

  const seen = new Set();
  return stmts
    .filter((stmt) => {
      if (stmt.getType() === 'bnode') return true;
      const key = `${stmt.getType()}:${stmt.getValue()}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map((stmt) => {
      const value = stmt.getValue();
      if (stmt.getType() === 'literal') {
        return { text: value };
      }
      if (stmt.getType() === 'bnode') {
        return { composite: true };
      }
      const choice = val2choice.get(value);
      if (choice) {
        return { label: localize(choice.label), uri: value };
      }
      const match = byURI.get(value);
      if (match) {
        return { entry: match };
      }
      // Only http(s) values are rendered as a link; guards against a
      // javascript:/data: scheme in the (untrusted) metadata becoming an XSS sink.
      return {
        uri: value,
        href: /^https?:\/\//i.test(value) ? value : undefined,
      };
    });
};
