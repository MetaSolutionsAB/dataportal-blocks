/* does not extend usedInSpecViaRD as there should only ever be one result */
/**
 * Links to the specification that *introduces* this resource, following the
 * inverse `dcterms:subject` relation restricted to non-inherited descriptors.
 *
 * Params:
 * - `namedclick` ('spec') — click route for the link.
 * - `relationinverse` ('dcterms:subject') — inverse relation from RD to resource.
 * - `constraints` — `~prof:isInheritedFrom` `<*>` keeps only descriptors
 *   not inherited from another profile.
 */
export default {
  extends: 'template',
  namedclick: 'spec',
  relationinverse: 'dcterms:subject',
  constraints: {
    '~prof:isInheritedFrom': '<*>',
  },
  template: `{{RDtoSpec namedclick="inherit"}}`,
};
