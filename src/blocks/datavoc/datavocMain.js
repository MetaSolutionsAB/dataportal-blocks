/* Headings should be parameterised nls, blocked by BLOCKS-340 */
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
          <h{{hl}} class="esbHeadingInSummary">{{datavocUsageHeader}}</h{{hl}}>
        </summary>
        {{usedInSpecViaRD
          hl="inherit"
          limit=specUsageLimit
          define="datavocUsageInSpec"
          class="datavocUsageInSpecContainer"
        }}
    </details>
  `,
};
