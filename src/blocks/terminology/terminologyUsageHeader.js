export default {
  extends: 'results',
  use: 'terminologyUsageInSpec',
  template: `{{nls "general.usedInSpecification" count=resultsize}}`,
};