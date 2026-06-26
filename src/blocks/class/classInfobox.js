// todo drop view-block
export default {
  extends: 'template',
  hl: '2',
  class: 'esbInfobox',
  template: `
    <h{{hl}}>{{nls "general.details"}}</h{{hl}}>
    <dl>
      <dt>{{nls "class.classUri"}}</dt>
      <dd><code>{{resourceURI}}</code></dd>
      <dt>{{nls "general.introducedInSpecification"}}</dt>
      <dd>{{introducedInSpecViaInspec}}</dd>
      <dt>{{nls "general.isPartOfDatavoc"}}</dt>
      <dd>{{relatedLink relation="rdfs:isDefinedBy" namedClick="datavoc" class="esbDatavocLink"}}</dd>
    </dl>
    {{view filterpredicates="rdfs:isDefinedBy,rdfs:comment,rdfs:label"}}
    {{rdfLinks hl=(hinc)}}
  `,
};
