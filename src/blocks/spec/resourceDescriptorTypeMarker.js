// Adds labels to Resource Descriptors if they are INSPEC-conformant
// todo: make nls compliant

export default {
  extends: 'template',
  content : '',
  template: `{{#ifprop "dcterms:conformsTo" uri="inspec:SKOS,inspec:SHACL,inspec:RDFS,inspec:SVG"}}
    <span class="resourceStyleMarker">
    {{#ifprop "dcterms:conformsTo" uri="inspec:SKOS"}}
      terminologi
    {{/ifprop}}
    {{#ifprop "dcterms:conformsTo" uri="inspec:RDFS"}}
      datavokabulär
    {{/ifprop}}
    {{#ifprop "dcterms:conformsTo" uri="inspec:SHACL"}}
      applikationsprofil
    {{/ifprop}}
    {{#ifprop "dcterms:conformsTo" uri="inspec:SVG"}}
      diagram
    {{/ifprop}}
  </span>
    {{/ifprop}}`
};
