// todo: Decide if this should tag based on INSPEC or role

/**
 * Adds a badge to a Resource Descriptor naming its INSPEC conformance type
 * (SKOS / RDFS / SHACL / SVG); renders nothing for non-conformant descriptors.
 *
 * Params:
 * - `badgeClass` ('esbResourceTypeBadge') — modifier class passed to `badge`.
 * CSS: emits `esbBadge` + `esbResourceTypeBadge` (via `badge`).
 */
export default {
  extends: 'template',
  badgeClass: 'esbResourceTypeBadge',
  template: `
    {{#ifprop "dcterms:conformsTo"}}
      {{#ifprop "dcterms:conformsTo" uri="inspec:SKOS"}}
          {{badge content=(nls "spec.inspecTypeSkos") class=badgeClass}}
      {{/ifprop}}
      {{#ifprop "dcterms:conformsTo" uri="inspec:RDFS"}}
        {{badge content=(nls "spec.inspecTypeRdfs") class=badgeClass}}
      {{/ifprop}}
      {{#ifprop "dcterms:conformsTo" uri="inspec:SHACL"}}
        {{badge content=(nls "spec.inspecTypeShacl") class=badgeClass}}
      {{/ifprop}}
      {{#ifprop "dcterms:conformsTo" uri="inspec:SVG"}}
        {{badge content=(nls "spec.inspecTypeSvg") class=badgeClass}}
      {{/ifprop}}
    {{/ifprop}}`,
};
