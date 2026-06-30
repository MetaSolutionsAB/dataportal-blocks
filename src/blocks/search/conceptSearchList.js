export default {
  extends: 'searchList',
  semanticHtml: true,
  limit: 10,
  namedclick: 'concept',
  rdftype: ['skos:Concept'],
  rowhead: '{{text}}',
  rowexpand: `{{description property="skos:definition"}}
  {{view filterpredicates="skos:prefLabel,skos:definition"}}`,
};
