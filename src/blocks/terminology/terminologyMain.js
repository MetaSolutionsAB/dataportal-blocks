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
        <h{{hl}} class="esbHeadingInSummary">{{topConceptInTerminologyHeader}}</h{{hl}}>
      </summary>
      {{topConceptInTerminologyList limit=conceptLimit}}
    </details>

    <p class="placeholderParagraph">{{nls "conceptScheme.usageInSpecIntro"}}</p>

    <details open>
        <summary class="esbSummaryWithHeading">
          <h{{hl}} class="esbHeadingInSummary">{{terminologyUsageHeader}}</h{{hl}}>
        </summary>
        {{usedInSpecViaRD
          hl="inherit"
          limit=specUsageLimit
          define="terminologyUsageInSpec"
          class="esbTerminologyUsageInSpecContainer"
        }}
    </details>
  `,
};
