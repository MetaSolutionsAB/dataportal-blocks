/* does not extend usedInSpecViaRD as there should only ever be one result */
export default {
  extends: 'template',
  namedclick: 'spec',
  relationinverse: 'dcterms:subject',
  constraints: {
    '~prof:isInheritedFrom': '<*>',
  },
  template: `{{RDtoSpec namedclick='inherit'}}`
};
