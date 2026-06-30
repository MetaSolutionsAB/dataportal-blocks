// shares a structure with '../common/layout/header.js' but cannot extend it as content needs to be determined dynamically
export default {
  extends: 'template',
  hl: '1',
  class: 'esbHeading',
  template: `
    <h{{hl}}>{{text}}</h{{hl}}>
    {{#ifprop "dcterms:publisher"}}
      {{link relation="dcterms:publisher" namedclick="organization" class="orgLink"}}
    {{/ifprop}}<br/>
    {{#ifprop "dcterms:conformsTo" uri="inspec:PROF"}}
      {{#ifprop "rdf:type" uri="prof:Profile"}}
        {{typeMarker content=(nls "spec.profileInspec")}}
      {{/ifprop}}
      {{#ifprop "rdf:type" uri="dcterms:Standard"}}
        {{typeMarker content=(nls "spec.foundationalInspec")}}
      {{/ifprop}}
    {{/ifprop}}
    {{#ifprop "dcterms:conformsTo" uri="inspec:PROF" invert="true"}}
      {{typeMarker content=(nls "spec.nonInspec")}}
    {{/ifprop}}
  `,
};
