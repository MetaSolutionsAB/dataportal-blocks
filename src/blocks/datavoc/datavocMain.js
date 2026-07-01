/**
 * Content column for the Data Vocabulary page: description, collapsible class
 * and property lists, and a spec-usage section.
 *
 * Params:
 * - `hl` ('2') — heading level for the section headings.
 * - `classLimit` (15) — max rows in the class list.
 * - `propertyLimit` (15) — max rows in the property list.
 * - `specUsageLimit` (15) — max rows in the spec-usage list.
 * CSS: emits `esbMainContent`; passes `esbDatavocUsageInSpecContainer`
 *   to the usage list.
 */
export default {
  extends: 'template',
  hl: '2',
  classLimit: 15,
  propertyLimit: 15,
  specUsageLimit: 15,
  class: 'esbMainContent',
  template: `
    <div>{{description}}</div>

    <details open>
      <summary class="esbSummaryWithHeading">
        <h{{hl}} class="esbHeadingInSummary">{{classInDatavocHeader}}</h{{hl}}>
      </summary>
      {{classInDatavocList limit=classLimit}}
    </details>

    <details open>
      <summary class="esbSummaryWithHeading">
        <h{{hl}} class="esbHeadingInSummary">{{propertyInDatavocHeader}}</h{{hl}}>
      </summary>
      {{propertyInDatavocList limit=propertyLimit}}
    </details>

    <p class="placeholderParagraph">{{nls "datavoc.usageInSpecIntro"}}</p>

    <details open>
        <summary class="esbSummaryWithHeading">
          <h{{hl}} class="esbHeadingInSummary">{{usageHeader use="datavocUsageInSpec"}}</h{{hl}}>
        </summary>
        {{usedInSpecViaRD
          hl="inherit"
          limit=specUsageLimit
          define="datavocUsageInSpec"
          class="esbDatavocUsageInSpecContainer"
        }}
    </details>
  `,
};
