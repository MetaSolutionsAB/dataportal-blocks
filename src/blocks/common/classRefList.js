import predicateRefList from './predicateRefList.js';

/**
 * `predicateRefList` for a predicate whose values are classes — `rdfs:domain`,
 * `rdfs:range`, `rdfs:subClassOf`. Rows link to the class page.
 *
 * Deliberately carries no `choiceItems`: domain and range need different RDForms
 * items and `rdfs:subClassOf` needs none, so the caller supplies them.
 *
 * Params (on top of `predicateRefList`):
 * - `namedclick` ('class'), `rowClass` ('esbClassLink').
 */
export default {
  extends: predicateRefList,
  namedclick: 'class',
  rowClass: 'esbClassLink',
};
