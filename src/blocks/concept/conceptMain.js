// todo: eachprop should include language labels
/**
 * Content column of the Concept page: definition, alternative labels, and the
 * broader / narrower / related / matching-concept sections.
 *
 * Params:
 * - `hl` ('2') — heading level for the section headings.
 * - `broaderConceptLimit` / `narrowerConceptLimit` / `relatedConceptLimit` /
 *   `matchingConceptLimit` (15 each) — row limits for the respective lists.
 * CSS: emits `esbMainContent`, and `esbConceptsInConceptContainer` around each
 *   relation list and its overflow note.
 */
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
      <div class="esbConceptsInConceptContainer">
        <div>{{conceptRelationList
          relation="skos:broader"
          defineCount="broaderConcepts"
          listplaceholder="esb_nls:concept.isTopConcept"
          limit=broaderConceptLimit
        }}</div>
        {{overflowNote useCount="broaderConcepts" labelKey="concept.conceptOverflow"}}
      </div>
    </details>

    <details open>
      <summary class="esbSummaryWithHeading">
        <h{{hl}} class="esbHeadingInSummary">{{nls "concept.narrowerConcepts"}}</h{{hl}}>
      </summary>
      <div class="esbConceptsInConceptContainer">
        <div>{{conceptRelationList
          relation="skos:narrower"
          defineCount="narrowerConcepts"
          listplaceholder="esb_nls:concept.noNarrowerConcepts"
          limit=narrowerConceptLimit
        }}</div>
        {{overflowNote useCount="narrowerConcepts" labelKey="concept.conceptOverflow"}}
      </div>
    </details>

    <details open>
      <summary class="esbSummaryWithHeading">
        <h{{hl}} class="esbHeadingInSummary">{{nls "concept.relatedConcepts"}}</h{{hl}}>
      </summary>
      <div class="esbConceptsInConceptContainer">
        <div>{{conceptRelationList
          relation="skos:related"
          defineCount="relatedConcepts"
          listplaceholder="esb_nls:concept.noRelatedConcepts"
          limit=relatedConceptLimit
        }}</div>
        {{overflowNote useCount="relatedConcepts" labelKey="concept.conceptOverflow"}}
      </div>
    </details>

    {{#ifprop "skos:exactMatch,skos:closeMatch,skos:relatedMatch,skos:broadMatch,skos:narrowMatch"}}
      <details open>
        <summary class="esbSummaryWithHeading">
          <h{{hl}} class="esbHeadingInSummary">{{nls "concept.matchingConcepts"}}</h{{hl}}>
        </summary>
        <div>{{conceptsInOtherTerminology hl=(hinc) limit=matchingConceptLimit}}</div>
      </details>
    {{/ifprop}}
  `,
};
