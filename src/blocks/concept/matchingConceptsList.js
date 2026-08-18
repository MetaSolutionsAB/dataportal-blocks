/* todo: a mix of entries and plain string URIs is not supported by the list block
 * (but rdforms does support it), so a mapping set where only some values resolve
 * locally renders the resolved ones and drops the rest — the placeholder only fires
 * when nothing resolves at all. Once BLOCKS-453 lands, feed `list.entries` from
 * `common/scripts/resolvePredicateRefs.js`, which already classifies each value in
 * metadata order and carries the http(s) guard; that would also retire
 * `matchingConceptsListFallback`. Rows must be real entries — BLOCKS-470, which
 * would have let `entries` take plain `{uri, label}` values, is closed as not
 * needed — so a value that resolves to nothing needs an `Object.create` pseudo-entry
 * with `getResourceURI` overridden, as the list block's own `property` mode does.
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
