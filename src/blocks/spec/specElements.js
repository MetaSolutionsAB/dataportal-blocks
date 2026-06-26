//todo: align with blocks in other views
export default {
  extends: 'list',
  layout: 'raw',
  semanticHtml: true,
  vertical: false,
  limit: 50,
  namedclick: '',
  class: 'esbSpecLink',
  listbody: '<div class="esbInlineList {{#if vertical}}esbInlineVerticalList{{/if}}">{{body}}</div>',
  rowhead: `{{link namedclick=namedclick class=class}}`
};
