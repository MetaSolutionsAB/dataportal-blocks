import listTruncated from '../common/layout/listTruncated.js';

//todo: split into a list for class and one for prop
/**
 * Inline list of the classes and properties a spec introduces/reuses, truncated
 * at `limit`. Base for `cpIntroducedInSpecList` and `cpReusedInSpecList`, which
 * set the `relation`.
 *
 * Params (on top of `listTruncated`):
 * - `namedclick` ('vocabulary') — click route for each class/property row.
 * - `rdftype` — type filter, applied to the relation's targets however many
 *   there are. The runtime only applied it to the first ten, which is what kept
 *   the classes and the properties from being listed separately.
 * - `bodyClass` ('esbCPInSpecContainer'), `rowClass` ('esbCPLink').
 * CSS: emits `esbCPInSpecContainer` (container) and `esbCPLink` (rows), plus
 *   `esbInlineList` from the base.
 */
export default {
  extends: listTruncated,
  namedclick: 'vocabulary',
  limit: 'inherit',
  rdftype: ['rdfs:Class', 'rdf:Property'],
  bodyClass: 'esbCPInSpecContainer',
  rowClass: 'esbCPLink',
};
