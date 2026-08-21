import listTruncated from '../common/layout/listTruncated.js';

/**
 * Inline list of the classes, or the properties, that a spec introduces or
 * reuses, truncated at `limit`. Base for the four `class*` / `property*` lists,
 * each of which sets the `relation` it follows, the `rdftype` it keeps, and its
 * own click route and row class.
 *
 * Params (on top of `listTruncated`):
 * - `bodyClass` ('esbCPInSpecContainer') — container class, shared by all four
 *   lists; the row class is what tells a class row from a property row.
 * CSS: emits `esbCPInSpecContainer`, plus `esbInlineList` from the base.
 */
export default {
  extends: listTruncated,
  limit: 'inherit',
  bodyClass: 'esbCPInSpecContainer',
};
