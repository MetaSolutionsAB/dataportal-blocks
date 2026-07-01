import listShowMore from '../common/layout/listShowMore.js';

//todo: split into a list for class and one for prop
/**
 * Inline list of the classes and properties a spec introduces/reuses. Base for
 * `cpIntroducedInSpecList` and `cpReusedInSpecList`, which set the `relation`.
 *
 * Params (on top of `listShowMore`):
 * - `namedclick` ('vocabulary') — click route for each class/property row.
 * - `rdftype` — intended type filter; currently ignored (BLOCKS-323).
 * - `bodyClass` ('esbCPInSpecContainer'), `rowClass` ('esbCPLink').
 * CSS: emits `esbCPInSpecContainer` (container) and `esbCPLink` (rows), plus
 *   `esbInlineList` from the base.
 */
export default {
  extends: listShowMore,
  namedclick: 'vocabulary',
  limit: 'inherit',
  rdftype: ['rdfs:Class', 'rdf:Property'], //todo: these are ignored due to BLOCKS-323
  bodyClass: 'esbCPInSpecContainer',
  rowClass: 'esbCPLink',
};
