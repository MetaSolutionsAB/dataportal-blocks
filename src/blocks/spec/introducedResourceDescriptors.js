import resourceDescriptors from './resourceDescriptors.js';

/**
 * `resourceDescriptors` filtered to the spec's own (introduced) descriptors —
 * those WITHOUT a `prof:isInheritedFrom` relation.
 */
export default {
  extends: resourceDescriptors,
  constraints: {
    '~prof:isInheritedFrom': '<*>',
  },
};
