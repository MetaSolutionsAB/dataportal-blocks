import listShowMore from '../common/layout/listShowMore.js';

export default {
  extends: listShowMore,
  namedclick: 'property',
  limit: 'inherit',
  rdftype: 'rdf:Property',
  define: 'propertiesInDatavoc',
  relationinverse: 'rdfs:isDefinedBy',
  bodyClass: 'esbPropertiesInDatavocContainer',
  rowClass: 'esbPropertyLink',
};
