import cpInSpecList from './cpInSpecList.js';

/**
 * The classes a specification reuses (`inspec:reuses`).
 */
export default {
  extends: cpInSpecList,
  relation: 'inspec:reuses',
  rdftype: 'rdfs:Class',
  namedclick: 'class',
  rowClass: 'esbClassLink',
  defineCount: 'classesReusedInSpec',
};
