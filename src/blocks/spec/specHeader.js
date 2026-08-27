import { resolveEntry } from '../common/scripts/resolveEntry.js';
import { isGrunddata } from '../common/scripts/isGrunddata.js';
/**
 * Specification page heading: title, publisher link, and a type badge whose
 * label is derived dynamically from INSPEC conformance and rdf:type (profile /
 * foundational / non-INSPEC) — the reason it can't extend `header`. A spec that
 * is a 'nationell grunddata' additionally gets a grunddata badge.
 *
 * Shares a structure with '../common/layout/header.js' but cannot extend it as
 * the content needs to be determined dynamically.
 *
 * Params:
 * - `hl` ('1') — heading level for the title.
 * - `badgeForNonInspec` (false) — whether to show a badge for non-INSPEC specifications in the header.
 * Provides on `data`:
 * - `isGrunddata` — whether the spec has a grunddata `dcterms:subject`.
 * CSS: emits `esbHeading`; badges via `badge` (`esbBadge` + `esbTypeBadge`,
 *   or `esbGrunddataMarker` for the grunddata badge); publisher link uses
 *   `esbOrgLink`.
 */
export default {
  extends: 'template',
  before: async function (node, data, registry) {
    const { entry } = resolveEntry(registry, data);
    data.isGrunddata = isGrunddata(entry);
    return Promise.resolve();
  },
  progressTemplate: `{{nls "general.loading"}}`,
  hl: '1',
  class: 'esbHeading',
  badgeForNonInspec: false,
  template: `
    <h{{hl}}>{{text}}</h{{hl}}>
    {{#ifprop "dcterms:publisher"}}
      {{link relation="dcterms:publisher" namedclick="organization" class="esbOrgLink"}}
    {{/ifprop}}
    {{#ifprop "dcterms:conformsTo" uri="inspec:PROF"}}
      {{#ifprop "rdf:type" uri="prof:Profile"}}
        {{badge content=(nls "spec.profileInspec")}}
      {{/ifprop}}
      {{#ifprop "rdf:type" uri="dcterms:Standard"}}
        {{badge content=(nls "spec.foundationalInspec")}}
      {{/ifprop}}
    {{/ifprop}}
    {{#if this.badgeForNonInspec}}
      {{#ifprop "dcterms:conformsTo" uri="inspec:PROF" invert="true"}}
        {{badge content=(nls "spec.nonInspec")}}
      {{/ifprop}}
    {{/if}}
    {{#if this.isGrunddata}}
      {{badge content=(nls "spec.grunddata") class="esbGrunddataMarker"}}
    {{/if}}
  `,
};
