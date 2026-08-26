/**
 * Content column for the Data Vocabulary page: description, collapsible class
 * and property lists, and a spec-usage section.
 *
 * Params:
 * - `hl` ('2') — heading level for the section headings.
 * - `classLimit` (15) — max rows in the class list.
 * - `propertyLimit` (15) — max rows in the property list.
 * - `specUsageLimit` (15) — max rows in the spec-usage list.
 * CSS: emits `esbMainContent`, and `esbClassesInDatavocContainer` /
 *   `esbPropertiesInDatavocContainer` around each list and its show-all
 *   button; passes `esbDatavocSpecUsageContainer`
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
      <div class="esbClassesInDatavocContainer">
        <div>{{classInDatavocList limit=classLimit}}</div>
        {{showAllLink
          namedclick="classSearch"
          labelKey="datavoc.showAllClasses"
          always=false
          useCount="classesInDatavoc"
        }}
      </div>
    </details>

    <details open>
      <summary class="esbSummaryWithHeading">
        <h{{hl}} class="esbHeadingInSummary">{{propertyInDatavocHeader}}</h{{hl}}>
      </summary>
      <div class="esbPropertiesInDatavocContainer">
        <div>{{propertyInDatavocList limit=propertyLimit}}</div>
        {{showAllLink
          namedclick="propertySearch"
          labelKey="datavoc.showAllProperties"
          always=false
          useCount="propertiesInDatavoc"
        }}
      </div>
    </details>

    <details open>
        <summary class="esbSummaryWithHeading">
          <h{{hl}} class="esbHeadingInSummary">{{usageHeader use="datavocUsageInSpec"}}</h{{hl}}>
        </summary>
        <div>{{usedInSpecViaRD
          hl="inherit"
          limit=specUsageLimit
          define="datavocUsageInSpec"
          class="esbDatavocSpecUsageContainer"
          vertical=true
        }}</div>
    </details>
  `,
};
