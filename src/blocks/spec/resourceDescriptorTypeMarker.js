// todo: Decide if this should tag based on INSPEC or role

// Adds labels to Resource Descriptors if they are INSPEC-conformant
export default {
  extends: 'template',
  content: '',
  template: `{{#ifprop "dcterms:conformsTo" uri="inspec:SKOS,inspec:SHACL,inspec:RDFS,inspec:SVG"}}
    <span class="resourceStyleMarker">
    {{#ifprop "dcterms:conformsTo" uri="inspec:SKOS"}}
      {{nls "spec.inspecTypeSkos"}}
    {{/ifprop}}
    {{#ifprop "dcterms:conformsTo" uri="inspec:RDFS"}}
      {{nls "spec.inspecTypeRdfs"}}
    {{/ifprop}}
    {{#ifprop "dcterms:conformsTo" uri="inspec:SHACL"}}
      {{nls "spec.inspecTypeShacl"}}
    {{/ifprop}}
    {{#ifprop "dcterms:conformsTo" uri="inspec:SVG"}}
      {{nls "spec.inspecTypeSvg"}}
    {{/ifprop}}
  </span>
    {{/ifprop}}`,
};
