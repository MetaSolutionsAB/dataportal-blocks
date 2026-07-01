import resourceDescriptors from './resourceDescriptors.js';

/**
 * `resourceDescriptors` filtered to reused descriptors — those WITH a
 * `prof:isInheritedFrom` relation.
 *
 * Params:
 * - `placeholderText` — empty-list message, overridden for the reused case.
 */
export default {
  extends: resourceDescriptors,
  constraints: {
    'prof:isInheritedFrom': '<*>',
  },
  placeholderText: 'esb_nls:spec.thisSpecificationHasNoReusedResources',
};
