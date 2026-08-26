/**
 * Aside infobox for the Class page: URI, the class it specialises, external
 * references, the spec it was introduced in, its parent data vocabulary, and RDF
 * links.
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
      <div>
        <dt>{{nls "class.classUri"}}</dt>
        <dd><code>{{resourceURI}}</code></dd>
      </div>
      {{#ifprop "rdfs:subClassOf"}}
        <div>{{classRefList
          predicate="rdfs:subClassOf"
          dtContent="esb_nls:class.subClassOf"
        }}</div>
      {{/ifprop}}
      {{#ifprop "rdfs:seeAlso"}}
        <div>{{externalRefList
          predicate="rdfs:seeAlso"
          dtContent="esb_nls:general.seeAlso"
        }}</div>
      {{/ifprop}}
      <div>
        <dt>{{nls "general.introducedInSpecification"}}</dt>
        <dd>{{introducedInSpecViaInspec}}</dd>
      </div>
      <div>
        <dt>{{nls "general.isPartOfDatavoc"}}</dt>
        <dd>{{relatedLink relation="rdfs:isDefinedBy" namedClick="datavoc" class="esbDatavocLink"}}</dd>
      </div>
    </dl>
    <div>{{rdfLinks hl=(hinc)}}</div>
  `,
};
