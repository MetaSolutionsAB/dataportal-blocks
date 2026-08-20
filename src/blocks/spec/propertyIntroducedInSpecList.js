import cpInSpecList from './cpInSpecList.js';

/**
 * The properties a specification introduces (`inspec:introduces`).
 */
export default {
  extends: cpInSpecList,
  relation: 'inspec:introduces',
  rdftype: 'rdf:Property',
  namedclick: 'property',
  rowClass: 'esbPropertyLink',
  defineCount: 'propertiesIntroducedInSpec',
};
