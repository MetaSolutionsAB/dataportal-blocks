export default {
  extends: 'template',
  //relation: 'adms:status',
  template: `
      {{#ifprop "adms:status"}}
        {{#ifprop "adms:status" uri="http://purl.org/adms/status/Completed" invert=true}}
          ({{prop "adms:status" render="label"}})
        {{/ifprop}}
      {{/ifprop}}`
};
