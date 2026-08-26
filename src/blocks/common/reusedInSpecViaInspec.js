import specUsageList from './specUsageList.js';

/**
 * Lists specifications that *reuse* this resource, following the inverse
 * `inspec:reuses` relation.
 *
 * Params (on top of those `specUsageList` recognises):
 * - `relationinverse` ('inspec:reuses') — inverse relation from spec to resource.
 * CSS: see `specUsageList`.
 */
export default {
  extends: specUsageList,
  relationinverse: 'inspec:reuses',
  vertical: true,
  rowhead: `{{link namedclick="inherit"}}`,
  listplaceholder: 'esb_nls:general.noReuseInSpecification',
};
