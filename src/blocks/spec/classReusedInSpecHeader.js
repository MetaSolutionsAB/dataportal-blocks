export default {
  extends: 'results',
  use: 'classesReusedInSpec',
  template: `{{nls "spec.classesReused" count=resultsize}}`,
};
