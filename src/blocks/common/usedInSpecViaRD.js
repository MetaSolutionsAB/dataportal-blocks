export default {
  extends: 'list',
  layout: 'raw',
  namedclick: 'spec',
  relationinverse: 'dcterms:subject',
  constraints: null,
  vertical: false,
  limit: 20,
  listhead: '',
  listbody: '<div class="esbInlineList{{#if class}} {{class}}{{/if}}">{{body}}</div>',
  rowhead: `{{RDtoSpec namedclick='inherit'}}`
};
