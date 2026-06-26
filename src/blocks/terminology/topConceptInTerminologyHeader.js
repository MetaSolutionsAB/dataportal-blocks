export default {
  extends: 'results',
  use: 'topConceptsInTerminology',
  template: `{{nls "conceptScheme.topConceptsInTerminology" count=resultsize}}`,
};