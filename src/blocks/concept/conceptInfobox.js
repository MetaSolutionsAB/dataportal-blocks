export default {
  extends: 'template',
  hl: '2',
  class: 'esbInfobox',
  template: `
    <h{{hl}}>{{nls "general.details"}}</h{{hl}}>
    <dl>
      <dt>{{nls "concept.conceptUri"}}</dt>
      <dd><code>{{resourceURI}}</code></dd>
      <dt>{{nls "concept.memberOfTerminology"}}</dt>
      <dd>{{relatedLink
        relation="skos:inScheme"
        namedClick="terminology"
        class="terminologyLink"
      }}</dd>
      
    </dl>
    
    {{rdfLinks hl=(hinc)}}
  `,
};
