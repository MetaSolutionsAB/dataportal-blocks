/* todo: look into gating on empty class/prop since the gate is on introduces/reduces
 * a specification that introduces only properties will show an empty classes
 */
/**
 * Content column of the Specification page: diagram, AP-inspect button,
 * description, the introduced/reused class and property sections, and the
 * introduced/reused resource-descriptor lists (each in a `<details>`).
 *
 * Params:
 * - `hl` ('2') — heading level for the section headings; sub-headings use `(hinc)`.
 * - `introducedLimit` (15) — row cap for each introduced list.
 * - `reusedLimit` (15) — row cap for each reused list.
 * CSS: emits `esbMainContent`, and `esbCPInSpecContainer` around each class or
 *   property list and its overflow note; section summaries use
 *   `esbSummaryWithHeading` and `esbHeadingInSummary`.
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
            <h{{hinc}} class="esbHeadingInSummary">{{classIntroducedInSpecHeader}}</h{{hinc}}>
          </summary>
          <div class="esbCPInSpecContainer">
            <div>{{classIntroducedInSpecList limit=introducedLimit}}</div>
            {{overflowNote useCount="classesIntroducedInSpec" labelKey="spec.classOverflow"}}
          </div>
        </details>
        <details open>
          <summary class="esbSummaryWithHeading">
            <h{{hinc}} class="esbHeadingInSummary">{{propertyIntroducedInSpecHeader}}</h{{hinc}}>
          </summary>
          <div class="esbCPInSpecContainer">
            <div>{{propertyIntroducedInSpecList limit=introducedLimit}}</div>
            {{overflowNote useCount="propertiesIntroducedInSpec" labelKey="spec.propertyOverflow"}}
          </div>
        </details>
      {{/ifprop}}
      {{#ifprop "inspec:reuses"}}
        <details open>
          <summary class="esbSummaryWithHeading">
            <h{{hinc}} class="esbHeadingInSummary">{{classReusedInSpecHeader}}</h{{hinc}}>
          </summary>
          <div class="esbCPInSpecContainer">
            <div>{{classReusedInSpecList limit=reusedLimit}}</div>
            {{overflowNote useCount="classesReusedInSpec" labelKey="spec.classOverflow"}}
          </div>
        </details>
        <details open>
          <summary class="esbSummaryWithHeading">
            <h{{hinc}} class="esbHeadingInSummary">{{propertyReusedInSpecHeader}}</h{{hinc}}>
          </summary>
          <div class="esbCPInSpecContainer">
            <div>{{propertyReusedInSpecList limit=reusedLimit}}</div>
            {{overflowNote useCount="propertiesReusedInSpec" labelKey="spec.propertyOverflow"}}
          </div>
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
