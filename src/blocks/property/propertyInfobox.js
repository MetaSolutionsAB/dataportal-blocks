// todo drop view-block
/**
 * Aside infobox for the Property page: URI, the spec it was introduced in, its
 * parent data vocabulary, a raw metadata view, and RDF links.
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
      <dt>{{nls "property.propertyUri"}}</dt>
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
