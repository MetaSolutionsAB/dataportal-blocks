/*
Todo:
* Shares a signature with listShowMore but is not ment to have a
* "show all" button. Instead we may want an option to just disable
* pagination (for use as a guard-rail in e.g. Infobox).
*  Blocked by BLOCKS-440
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
  listbody:
    '<div class="esbInlineList{{#if vertical}} esbInlineVerticalList{{/if}}{{#if bodyClass}} {{bodyClass}}{{/if}}">{{body}}</div>',
  rowhead: `{{link namedclick="inherit" class=rowClass}}`,
};
