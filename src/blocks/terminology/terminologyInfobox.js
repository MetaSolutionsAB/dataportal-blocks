/**
 * Aside infobox for the Terminology page: terminology URI, introducing
 * specification, RDF download links, and optionally the concept count.
 *
 * Params:
 * - `hl` ('2') — heading level for the infobox heading.
 * - `showCount` (false) — add a row with the number of concepts. Off because
 *   `conceptInTerminologyList` counts the same concepts in its own heading, so
 *   the composite view would say it twice. Worth turning on for an infobox
 *   mounted on its own, or beside a list of something narrower.
 * CSS: emits `esbInfobox`.
 */
export default {
  extends: 'template',
  hl: '2',
  showCount: false,
  class: 'esbInfobox',
  template: `
    <h{{hl}}>{{nls "general.details"}}</h{{hl}}>
    <dl>
      <div>{{resourceUriRow
        dtContent="esb_nls:conceptScheme.terminologyUri"
      }}</div>
      <div>
        <dt>{{nls "general.introducedInSpecification"}}</dt>
        <dd>{{introducedInSpecViaRD}}</dd>
      </div>
      {{#if showCount}}
        <div>
          <dt>{{nls "conceptScheme.conceptCount"}}</dt>
          <dd>{{conceptInTerminologyCount}}</dd>
        </div>
      {{/if}}
    </dl>
    <div>{{rdfLinkList hl=(hinc)}}</div>
  `,
};
