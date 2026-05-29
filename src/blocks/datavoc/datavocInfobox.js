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
