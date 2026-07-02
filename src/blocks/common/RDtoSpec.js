/**
 * Links a Resource Descriptor to its owning specification, following the
 * inverse `prof:hasResource` relation.
 *
 * Caveat: relies on the assumption that Resource Descriptors are unique per
 * specification — i.e. it is broken until the RD/Artifact separation is done.
 *
 * Params:
 * - `namedclick` ('spec') — click route for the link.
 * - `relationinverse` ('prof:hasResource') — inverse relation from spec to RD.
 * - `class` ('esbSpecificationLink') — class on the rendered link.
 * CSS: emits `esbSpecificationLink`.
 */
export default {
  extends: 'template',
  namedclick: 'spec',
  relationinverse: 'prof:hasResource',
  class: 'esbSpecificationLink',
  template: `{{link namedclick=namedclick}}`,
};
