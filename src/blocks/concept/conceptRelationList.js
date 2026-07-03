import listShowMore from '../common/layout/listShowMore.js';

/**
 * Inline show-more list of concepts tied to this one by a given SKOS semantic
 * relation (broader / narrower / related). Specialises `listShowMore`; the
 * caller supplies the `relation` and its empty-state `listplaceholder`.
 *
 * Params (on top of `listShowMore`):
 * - `namedclick` ('concept') — click route for each row.
 * - `relation` ('') — the SKOS relation to follow (e.g. `skos:broader`).
 * - `listplaceholder` ('') — NLS-prefixed empty-state message.
 * - `vertical` (true) — stack rows vertically instead of inline.
 * - `bodyClass` ('esbConceptsInConceptContainer') — list container class.
 * - `rowClass` ('esbConceptLink') — per-row link class.
 * CSS: container gets `esbInlineList` + `esbInlineVerticalList` +
 *   `esbConceptsInConceptContainer`; rows get `esbConceptLink`.
 */
export default {
  extends: listShowMore,
  namedclick: 'concept',
  limit: 'inherit',
  rdftype: 'skos:Concept',
  relation: '',
  listplaceholder: '',
  vertical: true,
  bodyClass: 'esbConceptsInConceptContainer',
  rowClass: 'esbConceptLink',
};
