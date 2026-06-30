/*
This relies on the assumption that Resource Descriptors are unique
per specification. I.e. it is broken until the RD/Artifact separation is done.
*/
export default {
  extends: 'template',
  namedclick: 'spec',
  relationinverse: 'prof:hasResource',
  class: 'esbSpecificationLink',
  template: `{{link namedclick=namedclick}}`,
};
