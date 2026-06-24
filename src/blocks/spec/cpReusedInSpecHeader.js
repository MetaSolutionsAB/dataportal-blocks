export default {
  extends: "results",
  use: "cpReusedInSpec",
  template: `{{nls "spec.cpReused" count=resultsize}}`,
};