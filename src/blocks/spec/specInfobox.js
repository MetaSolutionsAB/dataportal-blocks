//todo: Sync with https://www.figma.com/proto/dUU3DpDaf5NmDmMgeWvtG0/DIGG-Dataportalen-2.0-dg-Boilerplate?page-id=7256%3A49200&node-id=7256-49201&viewport=708%2C-408%2C0.25&t=dd87w5GHswWbCniA-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=7266%3A50385
// todo: fix mix of dd and view

/**
 * Sidebar infobox for a Specification: the specification URI, any
 * `prof:isProfileOf` parents and the keywords; then an rdforms `view` of the core
 * metadata that has no row of its own; then the `adms:last` / `prev` / `next`
 * version links, and the RDF download links.
 *
 * The rows are split across two `<dl>`s because the `view` sits between them —
 * see the todo above.
 *
 * Params:
 * - `hl` ('2') — heading level for the panel title; `rdfLinks` gets `hl+1`.
 * - `keywordLimit` (5) — how many keywords show before the rest are collapsed.
 * CSS: emits `esbInfobox`, and `esbKeywordsList` on the keyword row.
 */
export default {
  extends: 'template',
  hl: '2',
  keywordLimit: 5,
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
        <div class="esbKeywordsList">{{keywordList limit=keywordLimit}}</div>
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
