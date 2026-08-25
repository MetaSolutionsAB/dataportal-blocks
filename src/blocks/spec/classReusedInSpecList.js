import cpInSpecList from './cpInSpecList.js';

/**
 * The classes a specification reuses. Shares `inspec:reuses` with
 * `propertyReusedInSpecList`, so `rdftype` is the whole of what separates the two.
 *
 * Params (on top of `cpInSpecList`):
 * - `defineCount` ('classesReusedInSpec') — registry key the uncapped count is
 *   published under, for `classReusedInSpecHeader` to render.
 * CSS: rows get `esbClassLink`; the container class comes from the base.
 */
export default {
  extends: cpInSpecList,
  relation: 'inspec:reuses',
  rdftype: 'rdfs:Class',
  namedclick: 'class',
  rowClass: 'esbClassLink',
  defineCount: 'classesReusedInSpec',
};
