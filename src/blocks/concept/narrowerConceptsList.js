import listShowMore from '../common/layout/listShowMore.js';

/**
 * Inline show-more list of a concept's narrower concepts (`skos:narrower`).
 * Specialises `listShowMore`.
 *
 * Params (on top of `listShowMore`):
 * - `namedclick` ('concept') — click route for each row.
 * - `define` ('narrowerConcepts') — named query.
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
  define: 'narrowerConcepts',
  relation: 'skos:narrower',
  listplaceholder: 'esb_nls:concept.noNarrowerConcepts',
  bodyClass: 'esbConceptsInConceptContainer',
  rowClass: 'esbConceptLink',
};
