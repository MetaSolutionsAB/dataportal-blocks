export default {
  extends: 'results',
  use: 'datavocUsageInSpec',
  template: `{{nls "general.usedInSpecification" count=resultsize}}`,
};