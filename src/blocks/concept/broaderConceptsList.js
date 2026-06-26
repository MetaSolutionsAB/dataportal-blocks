import listShowMore from '../common/layout/listShowMore.js';

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
