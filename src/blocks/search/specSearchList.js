export default {
  extends: 'searchList',
  semanticHtml: true,
  limit: 10,
  namedclick: 'spec',
  dependencyproperties: 'prof:hasResource,dcterms:conformsTo,rdf:type',
  rdftype: ['dcterms:Standard', 'prof:Profile'],
  rowhead: '{{text}}',
  rowexpand: `{{description}}
  {{view filterpredicates="dcterms:title,dcterms:description,prof:hasResource,dcat:contactPoint"}}`,
};
