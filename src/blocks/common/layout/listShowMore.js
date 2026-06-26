/*
Todo:
* replace pagination by a  "show all" button which links
  to the search page, filtered on the terminology.
  Blocked by BLOCKS-440
*/
export default {
  extends: 'list',
  layout: 'raw',
  semanticHtml: true,
  namedclick: '',
  limit: 'inherit',
  bodyClass: '',
  rowClass: '',
  listbody: '<div class="esbInlineList {{bodyClass}}">{{body}}</div>',
  rowhead: `{{link namedclick="inherit" class=rowClass}}`,
};
