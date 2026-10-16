export default {
  extends: 'template',
  template: `
      {{#ifprop "adms:status"}}
        {{#ifprop "adms:status" uri="http://purl.org/adms/status/Completed" invert=true}}
          (<span {{prop "adms:status" render="langattr"}}>{{prop "adms:status" render="label"}}</span>)
        {{/ifprop}}
      {{/ifprop}}`,
};
