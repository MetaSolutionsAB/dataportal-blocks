/* @todo: determine how to handle limit overflow
 * Either `.slice(0, limit)` which silently discards the overflow
 * or leave to list but use CSS to hide the pagination and `::after` an ellipsis on pagination
 */
import { delegatedEntry } from '../common/scripts/delegatedEntry.js';
import { publishListCount } from '../common/scripts/listCount.js';
import { resolvePredicateRefs } from '../common/scripts/resolvePredicateRefs.js';

/**
 * Inline list of the concepts a SKOS mapping relation points at, rendering local and
 * external ones side by side in metadata order.
 *
 * A mapping set routinely mixes concepts held in this EntryStore with concepts that live
 * elsewhere and are only referenced by URI. The list block's own row sources cannot
 * express that mix — they resolve what they can and drop the rest — so the rows are built
 * here instead, via `entries`, and each value becomes exactly one row: a resolved entry,
 * or a `delegatedEntry` stand-in carrying the URI.
 *
 * Params:
 * - `relation` ('') — the SKOS mapping predicate to read (e.g. `skos:exactMatch`).
 *   Supplied by `matchingConcepts`.
 * - `defineCount` ('') — registry key to publish `{resultsize, shown,
 *   truncated}` under, for an `overflowNote` beside the list to read.
 * - `limit` ('inherit') — row cap. Required to resolve to a positive integer; anything
 *   else throws, which the list reports as an empty list plus a console error rather
 *   than quietly paginating at some default.
 * - `namedclick` ('concept') — click route for rows that resolved locally.
 * - `bodyClass` ('esbMatchingConceptsContainer') — list container class.
 * - `rowClass` ('esbConceptLink') — link class on a resolved row.
 * - `externalRowClass` ('esbExternalConceptLink') — link class on an unresolved row.
 * CSS: container gets `esbInlineList` + `esbMatchingConceptsContainer`; rows get either
 *   row class above.
 */
export default {
  extends: 'list',
  layout: 'raw',
  semanticHtml: true,
  namedclick: 'concept',
  relation: '',
  defineCount: '',
  limit: 'inherit',
  bodyClass: 'esbMatchingConceptsContainer',
  rowClass: 'esbConceptLink',
  externalRowClass: 'esbExternalConceptLink',
  entries: async (entry, conf, registry) => {
    const limit = Number(conf.limit);
    if (!Number.isInteger(limit) || limit < 1) {
      throw new TypeError(
        `matchingConceptsList: limit must be a positive integer, got ${JSON.stringify(conf.limit)}.`
      );
    }
    // resolvePredicateRefs already classifies every value in metadata order and sets
    // `href` only on the http(s) ones, so a row is renderable exactly when it is a local
    // entry or a linkable URI. A literal, a blank node or a URI on some other scheme has
    // nothing a reader could follow, so it is dropped rather than shown as bare text.
    const refs = await resolvePredicateRefs(registry, entry, conf.relation);
    const renderable = refs
      .filter((ref) => {
        if (ref.entry || ref.href) return true;
        console.warn(
          `matchingConceptsList: ${conf.relation} on ${entry.getURI()} has a value that is neither a local concept nor an http(s) URI (${ref.uri || ref.text || 'blank node'}); that row is omitted.`
        );
        return false;
      })
      .map((ref) => ref.entry || delegatedEntry(entry, ref.href));
    const rows = renderable.slice(0, limit);
    // The denominator is the renderable values, not every value: the ones dropped
    // above were unrenderable rather than held back, and they warn for themselves.
    publishListCount(registry, conf, rows, renderable.length);
    return rows;
  },
  listbody: '<div class="esbInlineList {{bodyClass}}">{{body}}</div>',
  // No whitespace anywhere in here: a text node beside the {{link}} placeholder stops the
  // runtime rendering the link into the row itself.
  rowhead: `{{#if entry.esbURI}}<a href="{{entry.esbURI}}" target="_blank" rel="noopener noreferrer" class="{{externalRowClass}}">{{entry.esbURI}}</a>{{else}}{{link namedclick="inherit" class=rowClass}}{{/if}}`,
  // The caller only renders this block when the relation is present, so an empty list
  // means every value was malformed — the console warning above is the diagnosis.
  listplaceholder: '',
};
