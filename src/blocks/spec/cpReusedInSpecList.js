import cpInSpecList from './cpInSpecList.js';

/**
 * `cpInSpecList` bound to the classes/properties a spec reuses
 * (`inspec:reuses`).
 */
export default {
  extends: cpInSpecList,
  define: 'cpReusedInSpec',
  relation: 'inspec:reuses',
};
