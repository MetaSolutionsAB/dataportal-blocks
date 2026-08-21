/**
 * Content column of the Specification page: diagram, AP-inspect button,
 * description, the introduced/reused class and property region (laid out by
 * `cpInSpecSections`), and the introduced/reused resource-descriptor lists
 * (each in a `<details>`).
 *
 * Params:
 * - `hl` ('2') — heading level for the section headings; sub-headings use `(hinc)`.
 * - `introducedLimit` (15) — row cap for each introduced list.
 * - `reusedLimit` (15) — row cap for each reused list.
 * CSS: emits `esbMainContent`; the resource-descriptor section summaries use
 *   `esbSummaryWithHeading` and `esbHeadingInSummary`. The class and property
 *   region's own classes belong to `cpInSpecSections`.
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
      <div>{{cpInSpecSections
          hl="inherit"
          introducedLimit=introducedLimit
          reusedLimit=reusedLimit
        }}</div>
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
