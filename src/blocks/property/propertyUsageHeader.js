export default {
  extends: 'results',
  use: 'propertyUsageInSpec',
  template: `{{nls "general.usedInSpecification" count=resultsize}}`,
};