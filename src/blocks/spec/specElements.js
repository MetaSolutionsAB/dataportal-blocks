export default {
  extends: 'list',
  layout: 'raw',
  semanticHtml: true,
  vertical: false,
  limit: 50,
  namedclick: '',
  listbody: '<div class="esbInlineList {{#if vertical}}esbInlineVerticalList{{/if}}">{{body}}</div>',
  rowhead: `{{link namedclick=namedclick}}<i class="fas fa-xs fa-external-link-alt"></i>`
};
