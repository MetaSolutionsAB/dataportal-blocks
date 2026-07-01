import listShowMore from '../common/layout/listShowMore.js';

/**
 * Inline show-more list of a concept's related concepts (`skos:related`).
 * Specialises `listShowMore`.
 *
 * Params (on top of `listShowMore`):
 * - `namedclick` ('concept') — click route for each row.
 * - `define` ('relatedConcepts') — named query.
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
  define: 'relatedConcepts',
  relation: 'skos:related',
  listplaceholder: 'esb_nls:concept.noRelatedConcepts',
  bodyClass: 'esbConceptsInConceptContainer',
  rowClass: 'esbConceptLink',
};
