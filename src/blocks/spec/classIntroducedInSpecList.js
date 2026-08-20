import cpInSpecList from './cpInSpecList.js';

/**
 * The classes a specification introduces (`inspec:introduces`).
 */
export default {
  extends: cpInSpecList,
  relation: 'inspec:introduces',
  rdftype: 'rdfs:Class',
  namedclick: 'class',
  rowClass: 'esbClassLink',
  defineCount: 'classesIntroducedInSpec',
};
