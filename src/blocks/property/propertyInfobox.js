/**
 * Aside infobox for the Property page: URI, domain / range, the property it
 * refines, external references, the spec it was introduced in, its parent data
 * vocabulary, and RDF links.
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
        dtContent="esb_nls:property.propertyUri"
      }}</div>
      {{#ifprop "rdfs:domain"}}
        <div>{{classRefList
          predicate="rdfs:domain"
          dtContent="esb_nls:property.domain"
          choiceItems="rdfs:domainGeneric"
        }}</div>
      {{/ifprop}}
      {{#ifprop "rdfs:range"}}
        <div>{{classRefList
          predicate="rdfs:range"
          dtContent="esb_nls:property.range"
          choiceItems="rdfs:rangeGeneric,rdfs:rangeDatatype"
        }}</div>
      {{/ifprop}}
      {{#ifprop "rdfs:subPropertyOf"}}
        <div>{{predicateRefList
          predicate="rdfs:subPropertyOf"
          dtContent="esb_nls:property.subPropertyOf"
          namedclick="property"
          rowClass="esbPropertyLink"
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
        <dd>{{relatedLink relation="rdfs:isDefinedBy" namedClick="datavoc" linkClass="esbDatavocLink"}}</dd>
      </div>
      <div>{{rdfLinkList}}</div>
    </dl>
  `,
};
