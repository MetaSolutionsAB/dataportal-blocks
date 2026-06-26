export default {
  extends: 'searchList',
  semanticHtml: true,
  limit: 10,
  namedclick: 'datavoc',
  rdftype: ['owl:Ontology'],
  rowhead: '{{text}}',
  rowexpand: `{{description}}
  {{view filterpredicates="dcterms:title,dcterms:description"}}`
};
