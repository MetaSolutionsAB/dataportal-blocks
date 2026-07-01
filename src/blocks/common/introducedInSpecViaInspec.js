/* does not extend reusedInSpecViaInspec as there should only ever be one result */
/**
 * Links to the specification that *introduces* this resource, following the
 * inverse `inspec:introduces` relation.
 *
 * Params:
 * - `namedclick` ('spec') — click route for the link.
 * - `relationinverse` ('inspec:introduces') — inverse relation from spec to resource.
 */
export default {
  extends: 'template',
  namedclick: 'spec',
  relationinverse: 'inspec:introduces',
  template: `{{link namedclick="inherit"}}`,
};
