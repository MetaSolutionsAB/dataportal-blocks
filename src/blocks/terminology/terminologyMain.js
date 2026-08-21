/**
 * Content column of the Terminology page: description, the top-concepts list,
 * and the "used in specifications" section.
 *
 * Params:
 * - `hl` ('2') — heading level for the section headings.
 * - `conceptLimit` (15) — max rows in the top-concepts list.
 * - `specUsageLimit` (15) — max rows in the spec-usage list.
 * CSS: emits `esbMainContent`, and `esbConceptsInTerminologyContainer` around
 *   the top-concepts list and its show-all button.
 */
export default {
  extends: 'template',
  hl: '2',
  conceptLimit: 15,
  specUsageLimit: 15,
  class: 'esbMainContent',
  template: `
    <div>{{description}}</div>

    <details open>
      <summary class="esbSummaryWithHeading">
        <h{{hl}} class="esbHeadingInSummary">{{conceptInTerminologyHeader}}</h{{hl}}>
      </summary>
      <div class="esbConceptsInTerminologyContainer">
        <div>{{conceptInTerminologyList limit=conceptLimit}}</div>
        {{showAllLink
          namedclick="conceptSearch"
          labelKey="conceptScheme.showAllConcepts"
        }}
      </div>
    </details>

    <details open>
        <summary class="esbSummaryWithHeading">
          <h{{hl}} class="esbHeadingInSummary">{{usageHeader use="terminologyUsageInSpec"}}</h{{hl}}>
        </summary>
        {{usedInSpecViaRD
          hl="inherit"
          limit=specUsageLimit
          define="terminologyUsageInSpec"
          class="esbTerminologySpecUsageContainer"
          vertical=true
        }}
    </details>
  `,
};
