export default {
  extends: 'results',
  use: 'propertiesReusedInSpec',
  template: `{{nls "spec.propertiesReused" count=resultsize}}`,
};
