export default {
  extends: 'searchList',
  semanticHtml: true,
  limit: 10,
  namedclick: 'class',
  rdftype: ['rdfs:Class'],
  rowhead: '{{text}}',
  rowexpand: `{{description property="rdfs:comment"}}
  {{view filterpredicates="rdfs:label,rdfs:comment"}}`,
};
