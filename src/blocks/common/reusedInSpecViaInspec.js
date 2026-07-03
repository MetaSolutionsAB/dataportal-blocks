import specUsageList from './specUsageList.js';

/**
 * Lists specifications that *reuse* this resource, following the inverse
 * `inspec:reuses` relation.
 *
 * Params:
 * - `relationinverse` ('inspec:reuses') — inverse relation from spec to resource.
 */
export default {
  extends: specUsageList,
  relationinverse: 'inspec:reuses',
  rowhead: `{{link namedclick="inherit"}}`,
};
