export default {
  extends: 'list',
  layout: 'raw',
  semanticHtml: true,
  rdftype: 'skos:Concept',
  relationinverse: 'skos:inScheme',
  listbody: ' ',
  listhead: '<span class="conceptCount">{{resultsize}}</span>',
};
