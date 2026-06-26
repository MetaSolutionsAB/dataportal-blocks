export default {
  extends: 'list',
  layout: 'raw',
  semanticHtml: true,
  namedclick: 'spec',
  relationinverse: 'dcterms:subject',
  constraints: null,
  vertical: false,
  limit: 20,
  listhead: '',
  listbody: '<div class="esbInlineList{{#if class}} {{class}}{{/if}}">{{body}}</div>',
  rowhead: `{{RDtoSpec namedclick="inherit"}}`
};
