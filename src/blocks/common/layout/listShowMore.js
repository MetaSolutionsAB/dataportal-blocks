/*
Todo:
* replace pagination by a  "show all" button which links
* to the search page, filtered on the terminology.
* Blocked by BLOCKS-440
*/
export default {
  extends: 'list',
  layout: 'raw',
  semanticHtml: true,
  vertical: false,
  namedclick: '',
  limit: 'inherit',
  bodyClass: '',
  rowClass: '',
  listbody: '<div class="esbInlineList{{#if vertical}} esbInlineVerticalList{{/if}}{{#if bodyClass}} {{bodyClass}}{{/if}}">{{body}}</div>',
  rowhead: `{{link namedclick="inherit" class=rowClass}}`,
};
