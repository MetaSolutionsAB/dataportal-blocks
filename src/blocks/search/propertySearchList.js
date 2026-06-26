export default {
  extends: 'searchList',
  semanticHtml: true,
  limit: 10,
  namedclick: 'property',
  rdftype: ['rdf:Property'],
  rowhead: '{{text}}',
  rowexpand: `{{description property="rdfs:comment"}}
  {{view filterpredicates="rdfs:label,rdfs:comment"}}`
};
