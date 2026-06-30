export default {
  extends: 'template',
  hl: '2',
  broaderConceptLimit: 15,
  narrowerConceptLimit: 15,
  relatedConceptLimit: 15,
  matchingConceptLimit: 15,
  class: 'esbMainContent',
  template: `
    <div>{{description property="skos:definition"}}</div>

    {{#ifprop "skos:altLabel"}}
      <h{{hl}} class="esbHeadingInSummary">{{nls "concept.altLabel"}}</h{{hl}}>
      <p>{{#eachprop "skos:altLabel"}}{{value}}{{separator}}{{/eachprop}}</p>
    {{/ifprop}}

    <details open>
      <summary class="esbSummaryWithHeading">
        <h{{hl}} class="esbHeadingInSummary">{{nls "concept.broaderConcepts"}}</h{{hl}}>
      </summary>
      {{broaderConceptsList limit=broaderConceptLimit}}
    </details>

    <details open>
      <summary class="esbSummaryWithHeading">
        <h{{hl}} class="esbHeadingInSummary">{{nls "concept.narrowerConcepts"}}</h{{hl}}>
      </summary>
      {{narrowerConceptsList limit=narrowerConceptLimit}}
    </details>

    <details open>
      <summary class="esbSummaryWithHeading">
        <h{{hl}} class="esbHeadingInSummary">{{nls "concept.relatedConcepts"}}</h{{hl}}>
      </summary>
      {{relatedConceptsList limit=relatedConceptLimit}}
    </details>

    {{#ifprop "skos:exactMatch,skos:closeMatch,skos:relatedMatch,skos:broadMatch,skos:narrowMatch"}}
      <details open>
        <summary class="esbSummaryWithHeading">
          <h{{hl}} class="esbHeadingInSummary">{{nls "concept.matchingConcepts"}}</h{{hl}}>
        </summary>
        {{conceptsInOtherTerminology hl=(hinc) limit=matchingConceptLimit}}
      </details>
    {{/ifprop}}
  `,
};