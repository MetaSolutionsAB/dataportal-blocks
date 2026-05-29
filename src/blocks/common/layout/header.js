export default {
  extends: 'template',
  hl: '1',
  class: 'esbHeading',
  typeContent: '',
  template: `
    <h{{hl}}>{{text}}</h{{hl}}>
    {{#ifprop "dcterms:publisher"}}
      {{link relation="dcterms:publisher" namedclick="organization" class="orgLink"}}
    {{/ifprop}}<br/>
    {{typeMarker content=typeContent}}
  `,
};
