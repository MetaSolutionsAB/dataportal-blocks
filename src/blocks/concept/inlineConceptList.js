/* First attempt to resolve as entries within the same EntryStore instance
 * then fall back to resolving them as plain strings.
 * Todo: A mix is not supported (but rdforms does support it.. outsource?)
 */
export default {
  extends: 'list',
  layout: 'raw',
  semanticHtml: true,
  namedclick: 'concept',
  limit: 'inherit',
  bodyClass: 'esbMatchingConceptsContainer',
  rowClass: 'esbConceptLink',
  listbody: '<div class="esbInlineList {{bodyClass}}">{{body}}</div>',
  rowhead: `{{link namedclick="inherit" class=rowClass}}`,
  listplaceholder: `{{
    inlineConceptListFallback
    property="inherit:relation"
    limit="inherit"
    bodyClass="inherit"
    listbody="inherit"
  }}`
};