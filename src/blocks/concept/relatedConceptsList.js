import listShowMore from '../common/layout/listShowMore.js';

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
