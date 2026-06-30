export default {
  extends: 'list',
  layout: 'raw',
  semanticHtml: true,
  limit: 'inherit',
  rowClass: 'esbExternalConceptLink',
  rowhead: `<a href="{{resourceURI}}" target="_blank" class="{{rowClass}}">{{resourceURI}}</a>`,
};
