import listTruncated from '../common/layout/listTruncated.js';

/**
 * Inline list of the classes, or the properties, that a spec introduces or
 * reuses, truncated at `limit`. Base for the four `class*` / `property*` lists,
 * each of which sets the `relation` it follows, the `rdftype` it keeps, and its
 * own click route and row class.
 *
 * The row class is what tells a class row from a property row.
 *
 * CSS: the list's container gets `esbInlineList` from the base.
 *   `esbCPInSpecContainer`, around the list and its overflow note, is the
 *   caller's.
 */
export default {
  extends: listTruncated,
  limit: 'inherit',
};
