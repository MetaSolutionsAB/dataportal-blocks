export default {
  extends: 'template',
  hl: '3',
  label: '',
  relationProperty: '',
  limit: 'inherit',
  template: `
    {{#ifprop relationProperty}}
      <div>
        <h{{hl}}>{{label}}</h{{hl}}>
        {{inlineConceptList relation=relationProperty limit="inherit"}}
      </div>
    {{/ifprop}}`,
};
