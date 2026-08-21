import listTruncated from '../common/layout/listTruncated.js';

/**
 * Inline list of concepts tied to this one by a given SKOS semantic relation
 * (broader / narrower / related), truncated at `limit`. Specialises
 * `listTruncated`; the caller supplies the `relation` and its empty-state
 * `listplaceholder`.
 *
 * Params (on top of `listTruncated`):
 * - `namedclick` ('concept') — click route for each row.
 * - `relation` ('') — the SKOS relation to follow (e.g. `skos:broader`).
 * - `listplaceholder` ('') — NLS-prefixed empty-state message.
 * - `vertical` (true) — stack rows vertically instead of inline.
 * - `rowClass` ('esbConceptLink') — per-row link class.
 * CSS: the list's container gets `esbInlineList` + `esbInlineVerticalList`;
 *   rows get `esbConceptLink`. `esbConceptsInConceptContainer`, around the list
 *   and its overflow note, is the caller's.
 */
export default {
  extends: listTruncated,
  namedclick: 'concept',
  limit: 'inherit',
  rdftype: 'skos:Concept',
  relation: '',
  listplaceholder: '',
  vertical: true,
  rowClass: 'esbConceptLink',
};
