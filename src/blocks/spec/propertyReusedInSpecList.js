import cpInSpecList from './cpInSpecList.js';

/**
 * The properties a specification reuses. Shares `inspec:reuses` with
 * `classReusedInSpecList`, so `rdftype` is the whole of what separates the two.
 *
 * Params (on top of `cpInSpecList`):
 * - `defineCount` ('propertiesReusedInSpec') — registry key the uncapped count is
 *   published under, for `propertyReusedInSpecHeader` to render.
 * CSS: rows get `esbPropertyLink`; the container class comes from the base.
 */
export default {
  extends: cpInSpecList,
  relation: 'inspec:reuses',
  rdftype: 'rdf:Property',
  namedclick: 'property',
  rowClass: 'esbPropertyLink',
  defineCount: 'propertiesReusedInSpec',
};
