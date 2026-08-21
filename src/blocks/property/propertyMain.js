/**
 * Content column for the Property page: description, the spec it was introduced
 * in, and a spec-usage section.
 *
 * Params:
 * - `hl` ('2') — heading level for the section headings.
 * - `specUsageLimit` (15) — max rows in the spec-usage list.
 * CSS: emits `esbMainContent`; passes `esbPropertySpecUsageContainer`
 *   to the usage list.
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

    <h{{hl}} class="esbHeadingInSummary">{{nls "general.reusedInSpecification"}}</h{{hl}}>
    {{reusedInSpecViaInspec
      hl="inherit"
      limit=specUsageLimit
      define="propertyUsageInSpec"
      class="esbPropertySpecUsageContainer"
    }}
  `,
};
