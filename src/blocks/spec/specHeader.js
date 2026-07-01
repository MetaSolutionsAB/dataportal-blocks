// shares a structure with '../common/layout/header.js' but cannot extend it as content needs to be determined dynamically
/**
 * Specification page heading: title, publisher link, and a type badge whose
 * label is derived dynamically from INSPEC conformance and rdf:type (profile /
 * foundational / non-INSPEC) — the reason it can't extend `header`.
 *
 * Params:
 * - `hl` ('1') — heading level for the title.
 * CSS: emits `esbHeading`; badges via `typeMarker` (`styleMarker`),
 *   publisher link uses `orgLink`.
 */
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
