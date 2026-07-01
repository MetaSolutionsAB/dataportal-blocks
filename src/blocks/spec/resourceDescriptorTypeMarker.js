// todo: Decide if this should tag based on INSPEC or role

/**
 * Adds a badge to a Resource Descriptor naming its INSPEC conformance type
 * (SKOS / RDFS / SHACL / SVG); renders nothing for non-conformant descriptors.
 *
 * Params:
 * - `content` ('') — unused passthrough kept for parity with `typeMarker`.
 * CSS: emits `resourceStyleMarker`.
 */
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
