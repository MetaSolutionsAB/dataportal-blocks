/**
 * Shared page-header base (extended by the `*Header` blocks). Renders the title
 * heading, an optional publisher organisation link, and a type badge.
 *
 * Params:
 * - `hl` ('1') — heading level for the `<h{hl}>` title.
 * - `class` ('esbHeading') — class on the block's heading wrapper.
 * - `typeContent` ('') — NLS-prefixed type label passed to `badge`.
 * CSS: emits `esbHeading` and `esbOrgLink` on the publisher link.
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
    {{/ifprop}}<br/>
    {{badge content=typeContent}}
  `,
};
