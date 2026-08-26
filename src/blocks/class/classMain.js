/**
 * Content column for the Class page: description, the spec it was introduced in,
 * and a spec-usage section.
 *
 * The introduced-in section needs no gate: a class only exists by way of a
 * specification introducing it.
 *
 * Params:
 * - `hl` ('2') — heading level for the section headings.
 * - `specUsageLimit` (15) — max rows in the spec-usage list.
 * CSS: emits `esbMainContent`; passes `esbClassSpecUsageContainer` to
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

    <h{{hl}} class="esbHeadingInSummary">{{nls "general.reusedInSpecification"}}</h{{hl}}>
    <div>{{reusedInSpecViaInspec
      hl="inherit"
      limit=specUsageLimit
      define="classUsageInSpec"
      class="esbClassSpecUsageContainer"
    }}</div>
  `,
};
