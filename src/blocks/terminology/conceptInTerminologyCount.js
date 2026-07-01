/**
 * Renders just the number of `skos:Concept` entries in this scheme (the
 * `resultsize` of an otherwise blank list query); no rows are output.
 *
 * CSS: emits `conceptCount` on the count span.
 */
export default {
  extends: 'list',
  layout: 'raw',
  semanticHtml: true,
  rdftype: 'skos:Concept',
  relationinverse: 'skos:inScheme',
  listbody: ' ',
  listhead: '<span class="conceptCount">{{resultsize}}</span>',
};
