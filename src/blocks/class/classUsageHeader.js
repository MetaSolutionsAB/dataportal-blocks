export default {
  extends: 'results',
  use: 'classUsageInSpec',
  template: `{{nls "general.usedInSpecification" count=resultsize}}`,
};