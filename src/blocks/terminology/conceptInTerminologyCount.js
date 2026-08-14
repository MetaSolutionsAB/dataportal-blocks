/**
 * Renders just the number of `skos:Concept` entries in this scheme (the
 * `resultsize` of an otherwise blank list query); no rows are output.
 *
 * Limit must be > 0 for query to actually run.
 *
 * CSS: emits `esbConceptCount` on the count span.
 */
export default {
  extends: 'list',
  layout: 'raw',
  semanticHtml: true,
  rdftype: 'skos:Concept',
  relationinverse: 'skos:inScheme',
  limit: 1,
  listbody: ' ',
  listhead: '<span class="esbConceptCount">{{resultsize}}</span>',
};
