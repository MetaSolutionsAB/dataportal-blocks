/**
 * Aside infobox for the Data Vocabulary page: URI and the specification it was
 * introduced in, plus raw RDF links.
 *
 * Params:
 * - `hl` ('2') — heading level for the box heading.
 * CSS: emits `esbInfobox`.
 */
export default {
  extends: 'template',
  hl: '2',
  class: 'esbInfobox',
  template: `
    <h{{hl}}>{{nls "general.details"}}</h{{hl}}>
    <dl>
      <div>{{resourceUriRow
        dtContent="esb_nls:datavoc.datavocUri"
      }}</div>
      <div>
        <dt>{{nls "general.introducedInSpecification"}}</dt>
        <dd>{{introducedInSpecViaRD}}</dd>
      </div>
      <div>{{rdfLinkList}}</div>
    </dl>
  `,
};
