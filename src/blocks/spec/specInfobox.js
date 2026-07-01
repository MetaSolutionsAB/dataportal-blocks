//todo: Sync with https://www.figma.com/proto/dUU3DpDaf5NmDmMgeWvtG0/DIGG-Dataportalen-2.0-dg-Boilerplate?page-id=7256%3A49200&node-id=7256-49201&viewport=708%2C-408%2C0.25&t=dd87w5GHswWbCniA-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=7266%3A50385
// todo: fix mix of dd and view

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
      <dt>{{nls "spec.specificationUri"}}</dt>
      <dd><code>{{resourceURI}}</code></dd>
      {{#ifprop "prof:isProfileOf"}}
        <dt>{{nls "respec.profileOf"}}</dt>
        <dd>{{relatedSpecList relation="prof:isProfileOf"}}</dd>
      {{/ifprop}}
    </dl>
    {{view onecol="true" filterpredicates="dcterms:title,dcterms:description,dcterms:publisher,prof:hasResource,prof:isProfileOf" showLanguage="false" rdformsid="prof:Profile"}}
    
    {{rdfLinks hl=(hinc)}}
  `,
};
