//todo: Sync with https://www.figma.com/proto/dUU3DpDaf5NmDmMgeWvtG0/DIGG-Dataportalen-2.0-dg-Boilerplate?page-id=7256%3A49200&node-id=7256-49201&viewport=708%2C-408%2C0.25&t=dd87w5GHswWbCniA-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=7266%3A50385
// todo: fix mix of dd and view
// todo: keywords need limit handling and show more button, shold also set lang-attribute correctly

/**
 * Sidebar infobox for a Specification: the specification URI, any
 * `prof:isProfileOf` parents, an rdforms `view` of core metadata, and RDF links.
 *
 * Params:
 * - `hl` ('2') — heading level for the panel title; `rdfLinks` gets `hl+1`.
 * CSS: emits `esbInfobox`.
 */
export default {
  extends: 'template',
  hl: '2',
  class: 'esbInfobox',
  template: `
    <h{{hl}}>{{nls "spec.aboutTheSpecification"}}</h{{hl}}>
    <dl>
      <div>
        <dt>{{nls "spec.specificationUri"}}</dt>
        <dd><code>{{resourceURI}}</code></dd>
      </div>
      {{#ifprop "prof:isProfileOf"}}
        <div>{{predicateRefList
          predicate="prof:isProfileOf"
          dtContent="esb_nls:respec.profileOf"
          namedclick="spec"
          rowClass="esbSpecLink"
          excludeType="prof:ResourceDescriptor"
        }}</div>
      {{/ifprop}}
      {{#ifprop "dcat:keyword"}}
        <div class="esbKeywordsList">
          <dt>{{nls "spec.keyword"}}</dt>
          {{#eachprop "dcat:keyword" limit=5}}<dd>{{value}}</dd>{{/eachprop}}
        </div>
      {{/ifprop}}
    </dl>
    {{view
      onecol="true"
      filterpredicates="dcterms:title,dcterms:description,dcterms:publisher,prof:hasResource,prof:isProfileOf,adms:prev,adms:next,adms:last,dcat:keyword"
      showLanguage="false"
      rdformsid="prof:Profile"
    }}
    <dl>
      {{#ifprop "adms:last"}}
        <div>{{predicateRefList
          predicate="adms:last"
          dtContent="esb_nls:respec.lastVersion"
          namedclick="spec"
          rowClass="esbSpecLink"
          excludeType="prof:ResourceDescriptor"
        }}</div>
      {{/ifprop}}
      {{#ifprop "adms:prev"}}
        <div>{{predicateRefList
          predicate="adms:prev"
          dtContent="esb_nls:respec.prevVersion"
          namedclick="spec"
          rowClass="esbSpecLink"
          excludeType="prof:ResourceDescriptor"
        }}</div>
      {{/ifprop}}
      {{#ifprop "adms:next"}}
        <div>{{predicateRefList
          predicate="adms:next"
          dtContent="esb_nls:respec.nextVersion"
          namedclick="spec"
          rowClass="esbSpecLink"
          excludeType="prof:ResourceDescriptor"
        }}</div>
      {{/ifprop}}
    </dl>
    
    {{rdfLinks hl=(hinc)}}
  `,
};
