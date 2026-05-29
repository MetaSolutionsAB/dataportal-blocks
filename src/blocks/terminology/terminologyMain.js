/* Headings should be parameterised nls, blocked by BLOCKS-340 */
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
      {{conceptInTerminologyList limit=conceptLimit}}
    </details>

    <p>{{nls "conceptScheme.usageInSpecIntro"}}</p>

    <details open>
        <summary class="esbSummaryWithHeading">
          <h{{hl}} class="esbHeadingInSummary">{{terminologyUsageHeader}}</h{{hl}}>
        </summary>
        {{usedInSpecViaRD
          hl="inherit"
          limit=specUsageLimit
          define="terminologyUsageInSpec"
          class="terminologyUsageInSpecContainer"
        }}
    </details>
  `,
};
