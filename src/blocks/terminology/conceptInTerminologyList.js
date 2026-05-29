import listShowMore from '../common/layout/listShowMore.js';

export default {
  extends: listShowMore,
  namedclick: 'concept',
  limit: 'inherit',
  rdftype: 'skos:Concept',
  define: 'conceptsInTerminology',
  relationinverse: 'skos:inScheme',
  bodyClass: 'esbConceptsInTerminologyContainer',
  rowClass: 'esbConceptLink',
};
