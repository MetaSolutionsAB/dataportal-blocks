// todo: split used/reused into class/properties
/**
 * Content column of the Specification page: diagram, AP-inspect button,
 * description, the introduced/reused classes-and-properties sections, and the
 * introduced/reused resource-descriptor lists (each in a `<details>`).
 *
 * Params:
 * - `hl` ('2') — heading level for the section headings; sub-headings use `(hinc)`.
 * - `introducedLimit` (15) — row cap passed to `cpIntroducedInSpecList`.
 * - `reusedLimit` (15) — row cap passed to `cpReusedInSpecList`.
 * CSS: emits `esbMainContent`; section summaries use `esbSummaryWithHeading`
 *   and `esbHeadingInSummary`.
 */
export default {
  extends: 'template',
  hl: '2',
  class: 'esbMainContent',
  introducedLimit: 15,
  reusedLimit: 15,
  template: `
    {{diagramImage}}
    {{specInspectAPButton}}
    <h{{hl}}>{{nls "general.description"}}</h{{hl}}>
    <div>{{description}}</div>

    {{#ifprop "inspec:introduces,inspec:reuses"}}
      <h{{hl}}>{{nls "spec.classesAndProperties"}}</h{{hl}}>
      {{#ifprop "inspec:introduces"}}
        <details open>
          <summary class="esbSummaryWithHeading">
            <h{{hinc}} class="esbHeadingInSummary">{{cpIntroducedInSpecHeader}}</h{{hinc}}>
          </summary>
          {{cpIntroducedInSpecList limit=introducedLimit}}
        </details>
      {{/ifprop}}
      {{#ifprop "inspec:reuses"}}
        <details open>
          <summary class="esbSummaryWithHeading">
            <h{{hinc}} class="esbHeadingInSummary">{{cpReusedInSpecHeader}}</h{{hinc}}>
          </summary>
          {{cpReusedInSpecList limit=reusedLimit}}
        </details>
      {{/ifprop}}
    {{/ifprop}}

    <h{{hl}}>{{nls "spec.resources"}}</h{{hl}}>
    {{#ifprop "dcterms:conformsTo" uri="inspec:PROF"}}
      <details open>
        <summary class="esbSummaryWithHeading">
          <h{{hinc}} class="esbHeadingInSummary">{{nls "spec.rIntroduced"}}</h{{hinc}}>
        </summary>
        {{introducedResourceDescriptors}}
      </details>
      <details>
        <summary class="esbSummaryWithHeading">
          <h{{hinc}} class="esbHeadingInSummary">{{nls "spec.rReused"}}</h{{hinc}}>
        </summary>
        {{reusedResourceDescriptors}}
      </details>
    {{/ifprop}}
    {{#ifprop "dcterms:conformsTo" uri="inspec:PROF" invert="true"}}
      {{resourceDescriptors hl=(hinc)}}
    {{/ifprop}}
  `,
};
