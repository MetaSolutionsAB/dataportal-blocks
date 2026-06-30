export default {
  extends: 'searchList',
  semanticHtml: true,
  limit: 10,
  namedclick: 'terminology',
  rdftype: ['skos:ConceptScheme'],
  rowhead: '{{text}}',
  rowexpand: `{{description}}
  {{view filterpredicates="dcterms:title,dcterms:description"}}`,
};
