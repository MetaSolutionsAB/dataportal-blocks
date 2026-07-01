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
      <dt>{{nls "datavoc.datavocUri"}}</dt>
      <dd><code>{{resourceURI}}</code></dd>
      <dt>{{nls "general.introducedInSpecification"}}</dt>
      <dd>{{introducedInSpecViaRD}}</dd>
      
    </dl>
    
    {{rdfLinks hl=(hinc)}}
  `,
};
