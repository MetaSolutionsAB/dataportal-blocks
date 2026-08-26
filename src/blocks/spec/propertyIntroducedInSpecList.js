import cpInSpecList from './cpInSpecList.js';

/**
 * The properties a specification introduces. Shares `inspec:introduces` with
 * `classIntroducedInSpecList`, so `rdftype` is the whole of what separates the two.
 *
 * Params (on top of `cpInSpecList`):
 * - `defineCount` ('propertiesIntroducedInSpec') — registry key the uncapped count is
 *   published under, for `propertyIntroducedInSpecHeader` to render.
 * CSS: rows get `esbPropertyLink`; the container around the list is the
 *   caller's, per the base.
 */
export default {
  extends: cpInSpecList,
  relation: 'inspec:introduces',
  rdftype: 'rdf:Property',
  namedclick: 'property',
  rowClass: 'esbPropertyLink',
  defineCount: 'propertiesIntroducedInSpec',
};
