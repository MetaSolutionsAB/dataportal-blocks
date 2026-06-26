export default {
  extends: 'template',
  hl: '2',
  specUsageLimit: 15,
  class: 'esbMainContent',
  template: `
    <div>{{description property="rdfs:comment"}}</div>

    <h{{hl}} class="esbHeadingInSummary">{{nls "general.introducedInSpecification"}}</h{{hl}}>
    <div>{{introducedInSpecViaInspec}}</div>

    <p class="placeholderParagraph">{{nls "property.usageInSpecIntro"}}</p>

    <details open>
        <summary class="esbSummaryWithHeading">
          <h{{hl}} class="esbHeadingInSummary">{{usageHeader use="propertyUsageInSpec"}}</h{{hl}}>
        </summary>
        {{reusedInSpecViaInspec
          hl="inherit"
          limit=specUsageLimit
          define="propertyUsageInSpec"
          class="esbPropertyUsageInSpecContainer"
        }}
    </details>
  `,
};
