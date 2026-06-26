export default {
  extends: 'template',
  dateprop: '',
  class: '',
  template: `{{#ifprop dateprop}}<time>{{date property=dateprop format="LL" tooltipformat="YYYY-MM-DD" class=class}}</time>{{/ifprop}}`,
};
