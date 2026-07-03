import specUsageList from './specUsageList.js';

/**
 * Lists specifications that *use* this resource via its Resource Descriptors,
 * following the inverse `dcterms:subject` relation; each row links through
 * `RDtoSpec`.
 *
 * Params:
 * - `relationinverse` ('dcterms:subject') — inverse relation from RD to resource.
 * - `constraints` (null) — no inheritance filter (subclasses add one).
 */
export default {
  extends: specUsageList,
  relationinverse: 'dcterms:subject',
  constraints: null,
  rowhead: `{{RDtoSpec namedclick="inherit"}}`,
};
