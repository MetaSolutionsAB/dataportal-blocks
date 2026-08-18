/**
 * Aside infobox for the Terminology page: terminology URI, introducing
 * specification, concept count, and RDF download links.
 *
 * Params:
 * - `hl` ('2') — heading level for the infobox heading.
 * CSS: emits `esbInfobox`.
 */
export default {
  extends: 'template',
  hl: '2',
  class: 'esbInfobox',
  template: `
    <h{{hl}}>{{nls "general.details"}}</h{{hl}}>
    <dl>
      <div>
        <dt>{{nls "conceptScheme.terminologyUri"}}</dt>
        <dd><code>{{resourceURI}}</code></dd>
      </div>
      <div>
        <dt>{{nls "general.introducedInSpecification"}}</dt>
        <dd>{{introducedInSpecViaRD}}</dd>
      </div>
      <div>
        <dt>{{nls "conceptScheme.conceptCount"}}</dt>
        <dd>{{conceptInTerminologyCount}}</dd>
      </div>
    </dl>
    
    {{rdfLinks hl=(hinc)}}
  `,
};
