export default {
  extends: 'results',
  use: 'classesIntroducedInSpec',
  template: `{{nls "spec.classesIntroduced" count=resultsize}}`,
};
