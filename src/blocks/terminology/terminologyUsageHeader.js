export default {
  extends: "results",
  use: "terminologyUsageInSpec",
  template: `{{nls "conceptScheme.usedInSpecification" count=resultsize}}`,
};