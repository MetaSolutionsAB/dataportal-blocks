/* todo: A mix of entries and plain string URIs is not supported by the list block
 * (but rdforms does support it). See if this can be solved with list.entries
 * BLOCKS-453. If so the XSS guard from resourceDescriptorSubject.js could be reused here.
 */
/**
 * Inline list of related concepts: resolves each as an entry in the same
 * EntryStore instance, falling back to plain string URIs (via
 * `matchingConceptsListFallback`, as the list placeholder) when none matches.
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
    matchingConceptsListFallback
    property="inherit:relation"
    limit="inherit"
    bodyClass="inherit"
    listbody="inherit"
  }}`,
};
