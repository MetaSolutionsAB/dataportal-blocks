// todo: the show-more button should clarify that it finds all concepts (not just top-level)
import listShowMore from '../common/layout/listShowMore.js';

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
