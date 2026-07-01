/**
 * Fallback for `inlineConceptList`: renders concept URIs that don't resolve to
 * a local entry as plain external links (opened in a new tab).
 *
 * Params:
 * - `rowClass` ('esbExternalConceptLink') — class on each link.
 * CSS: emits `rowClass` (`esbExternalConceptLink`) on each anchor.
 */
export default {
  extends: 'list',
  layout: 'raw',
  semanticHtml: true,
  limit: 'inherit',
  rowClass: 'esbExternalConceptLink',
  rowhead: `<a href="{{resourceURI}}" target="_blank" class="{{rowClass}}">{{resourceURI}}</a>`,
};
