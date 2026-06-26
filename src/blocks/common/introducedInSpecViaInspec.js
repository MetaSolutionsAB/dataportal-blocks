/* does not extend reusedInSpecViaInspec as there should only ever be one result */
export default {
  extends: 'template',
  namedclick: 'spec',
  relationinverse: 'inspec:introduces',
  template: `{{link namedclick="inherit"}}`
};
