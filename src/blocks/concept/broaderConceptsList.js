import listShowMore from '../common/layout/listShowMore.js';

/**
 * Inline show-more list of a concept's broader concepts (`skos:broader`).
 * Specialises `listShowMore`; shows a placeholder when the concept is a top concept.
 *
 * Params (on top of `listShowMore`):
 * - `namedclick` ('concept') — click route for each row.
 * - `define` ('broaderConcepts') — named query.
 * - `bodyClass` ('esbConceptsInConceptContainer') — list container class.
 * - `rowClass` ('esbConceptLink') — per-row link class.
 * CSS: container gets `esbInlineList` + `esbConceptsInConceptContainer`; rows
 *   get `esbConceptLink`.
 */
export default {
  extends: listShowMore,
  namedclick: 'concept',
  limit: 'inherit',
  rdftype: 'skos:Concept',
  define: 'broaderConcepts',
  relation: 'skos:broader',
  listplaceholder: 'esb_nls:concept.isTopConcept',
  bodyClass: 'esbConceptsInConceptContainer',
  rowClass: 'esbConceptLink',
};
