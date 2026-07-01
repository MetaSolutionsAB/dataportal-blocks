// todo: the show-more button should clarify that it finds all concepts (not just top-level)
import listShowMore from '../common/layout/listShowMore.js';

/**
 * Lists a terminology's concepts as inline concept links with a show-more
 * button. Specialises `listShowMore` for `skos:topConceptOf`.
 *
 * Params (on top of `listShowMore`):
 * - `namedclick` ('concept') — click route for each concept row.
 * - `define` ('topConceptsInTerminology') — named query (counted elsewhere).
 * - `bodyClass` ('esbConceptsInTerminologyContainer') — list container class.
 * - `rowClass` ('esbConceptLink') — per-row link class.
 * CSS: container gets `esbInlineList` + `esbConceptsInTerminologyContainer`;
 *   rows get `esbConceptLink`.
 */
export default {
  extends: listShowMore,
  namedclick: 'concept',
  limit: 'inherit',
  rdftype: 'skos:Concept',
  define: 'topConceptsInTerminology',
  relationinverse: 'skos:topConceptOf',
  bodyClass: 'esbConceptsInTerminologyContainer',
  rowClass: 'esbConceptLink',
};
