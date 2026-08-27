/**
 * Shared page-header base (extended by the `*Header` blocks). Renders the title
 * heading, an optional publisher organisation link, a parent link for
 * classes/properties/concepts and a type badge.
 *
 * Params:
 * - `hl` ('1') — heading level for the `<h{hl}>` title.
 * - `class` ('esbHeading') — class on the block's heading wrapper.
 * - `typeContent` ('') — NLS-prefixed type label passed to `badge`.
 * CSS: emits `esbHeading` and `esbOrgLink` on the publisher link and
 *   `esbTerminologyLink` or `esbDatavocLink` on the parent link.
 */
export default {
  extends: 'template',
  hl: '1',
  class: 'esbHeading',
  typeContent: '',
  template: `
    <h{{hl}}>{{text}}</h{{hl}}>
    {{#ifprop "dcterms:publisher"}}
      {{link relation="dcterms:publisher" namedclick="organization" class="esbOrgLink"}}
    {{/ifprop}}
    {{#ifprop "rdf:type" uri="skos:Concept"}}
        {{relatedLink
          relation="skos:inScheme"
          namedClick="terminology"
          linkClass="esbTerminologyLink"
        }}
    {{/ifprop}}
    {{#ifprop "rdf:type" uri="rdfs:Class,rdf:Property"}}
        {{relatedLink
          relation="rdfs:isDefinedBy"
          namedClick="datavoc"
          linkClass="esbDatavocLink"
        }}
    {{/ifprop}}
    {{badge content=typeContent}}
  `,
};
