import cpInSpecList from './cpInSpecList.js';

/**
 * `cpInSpecList` bound to the classes/properties a spec introduces
 * (`inspec:introduces`).
 */
export default {
  extends: cpInSpecList,
  defineCount: 'cpIntroducedInSpec',
  relation: 'inspec:introduces',
};
