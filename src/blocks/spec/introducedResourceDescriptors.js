import resourceDescriptors from './resourceDescriptors.js';

export default {
  extends: resourceDescriptors,
  constraints: {
    '~prof:isInheritedFrom': '<*>',
  },
};
