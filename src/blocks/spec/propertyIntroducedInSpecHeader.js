export default {
  extends: 'results',
  use: 'propertiesIntroducedInSpec',
  template: `{{nls "spec.propertiesIntroduced" count=resultsize}}`,
};
