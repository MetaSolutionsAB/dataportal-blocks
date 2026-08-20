import cpInSpecList from './cpInSpecList.js';

/**
 * The properties a specification reuses (`inspec:reuses`).
 */
export default {
  extends: cpInSpecList,
  relation: 'inspec:reuses',
  rdftype: 'rdf:Property',
  namedclick: 'property',
  rowClass: 'esbPropertyLink',
  defineCount: 'propertiesReusedInSpec',
};
