/**
 * Content column for the Class page: description, the spec it was introduced in,
 * and a spec-usage section.
 *
 * Params:
 * - `hl` ('2') — heading level for the section headings.
 * - `specUsageLimit` (15) — max rows in the spec-usage list.
 * CSS: emits `esbMainContent`; passes `esbClassUsageInSpecContainer` to
 *   the usage list.
 */
export default {
  extends: 'template',
  hl: '2',
  specUsageLimit: 15,
  class: 'esbMainContent',
  template: `
    <div>{{description property="rdfs:comment"}}</div>

    <h{{hl}} class="esbHeadingInSummary">{{nls "general.introducedInSpecification"}}</h{{hl}}>
    <div>{{introducedInSpecViaInspec}}</div>

    <p class="placeholderParagraph">{{nls "class.usageInSpecIntro"}}</p>

    <details open>
        <summary class="esbSummaryWithHeading">
          <h{{hl}} class="esbHeadingInSummary">{{usageHeader use="classUsageInSpec"}}</h{{hl}}>
        </summary>
        {{reusedInSpecViaInspec
          hl="inherit"
          limit=specUsageLimit
          define="classUsageInSpec"
          class="esbClassUsageInSpecContainer"
        }}
    </details>
  `,
};
