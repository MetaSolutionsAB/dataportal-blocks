export default {
  extends: 'template',
  template: `
      {{#ifprop "adms:status"}}
        {{#ifprop "adms:status" uri="http://purl.org/adms/status/Completed" invert=true}}
          ({{prop "adms:status" render="label"}})
        {{/ifprop}}
      {{/ifprop}}`,
};
