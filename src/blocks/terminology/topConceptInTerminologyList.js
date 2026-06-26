// the button should clarify that it fins all concepts 8not just top level)
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
