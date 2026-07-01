// Todo: A mix is not supported (but rdforms does support it.. outsource?)
/**
 * Inline list of related concepts: resolves each as an entry in the same
 * EntryStore instance, falling back to plain string URIs (via
 * `inlineConceptListFallback`, as the list placeholder) when none matches.
 *
 * Params:
 * - `namedclick` ('concept') — click route for resolved-entry rows.
 * - `bodyClass` ('esbMatchingConceptsContainer') — list container class.
 * - `rowClass` ('esbConceptLink') — per-row link class.
 * CSS: container gets `esbInlineList` + `esbMatchingConceptsContainer`.
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
  }}`,
};
