import cpInSpecList from './cpInSpecList.js';

/**
 * The classes a specification introduces. Shares `inspec:introduces` with
 * `propertyIntroducedInSpecList`, so `rdftype` is the whole of what separates the two.
 *
 * Params (on top of `cpInSpecList`):
 * - `defineCount` ('classesIntroducedInSpec') — registry key the uncapped count is
 *   published under, for `classIntroducedInSpecHeader` to render.
 * CSS: rows get `esbClassLink`; the container class comes from the base.
 */
export default {
  extends: cpInSpecList,
  relation: 'inspec:introduces',
  rdftype: 'rdfs:Class',
  namedclick: 'class',
  rowClass: 'esbClassLink',
  defineCount: 'classesIntroducedInSpec',
};
