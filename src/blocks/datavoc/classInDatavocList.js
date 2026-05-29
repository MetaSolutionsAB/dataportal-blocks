import listShowMore from '../common/layout/listShowMore.js';

export default {
  extends: listShowMore,
  namedclick: 'class',
  limit: 'inherit',
  rdftype: 'rdfs:Class',
  define: 'classesInDatavoc',
  relationinverse: 'rdfs:isDefinedBy',
  bodyClass: 'esbClassesInDatavocContainer',
  rowClass: 'esbClassLink',
};
