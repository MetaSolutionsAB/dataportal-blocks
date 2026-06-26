export default {
  extends: 'template',
  hl: '2',
  class: 'esbInfobox',
  template: `
    <h{{hl}}>{{nls "general.details"}}</h{{hl}}>
    <dl>
      <dt>{{nls "conceptScheme.terminologyUri"}}</dt>
      <dd><code>{{resourceURI}}</code></dd>
      <dt>{{nls "general.introducedInSpecification"}}</dt>
      <dd>{{introducedInSpecViaRD}}</dd>
      <dt>{{nls "conceptScheme.conceptCount"}}</dt>
      <dd>{{conceptInTerminologyCount}}</dd>
      
    </dl>
    
    {{rdfLinks hl=(hinc)}}
  `,
};
