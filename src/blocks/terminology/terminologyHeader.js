export default {
  extends: 'template',
  hl: '1',
  class: 'esbHeading',
  template: `
    <h{{hl}}>{{text}}</h{{hl}}>
    {{#ifprop "dcterms:publisher"}}
      <span class="orgLink">{{link relation="dcterms:publisher" namedclick="organization"}}</span>
    {{/ifprop}}<br/>
    {{typeMarker content=(nls "conceptScheme.conceptScheme")}}
  `,
};
