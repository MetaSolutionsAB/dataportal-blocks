/**
 * List of a specification's Resource Descriptors (`prof:hasResource`). Each row
 * shows the type badge, title, role(s) and reused-from link, with an expandable
 * subject + metadata view. Base block — `introducedResourceDescriptors` and
 * `reusedResourceDescriptors` extend it with a `constraints` filter.
 *
 * Params:
 * - `hl` (4) — heading level for each row's title.
 * - `placeholderText` — NLS key shown when the list is empty (overridden by the
 *   reused variant).
 * CSS: emits `esbResourceDescriptors` (container), `esbSpecPart` (title link),
 *   `esbResourcesFeatures` (the role/reused-from `<dl>`).
 */
export default {
  extends: 'list',
  semanticHtml: true,
  hl: 4,
  relation: 'prof:hasResource',
  dependencyproperties: 'prof:isInheritedFrom',
  expandTooltip: 'esb_nls:spec.moreInformation',
  unexpandTooltip: 'esb_nls:spec.lessInformation',
  listbody: '<div class="esbResourceDescriptors">{{body}}</div>',
  placeholderText: 'esb_nls:spec.thisSpecificationHasNoResources',
  listplaceholder:
    '<div class="alert alert-info" role="alert">{{placeholderText}}</div>',
  rowhead: `{{resourceDescriptorTypeMarker}}
    <h{{hl}}>{{text class="esbSpecPart"}}</h{{hl}}>
    <dl class="esbResourcesFeatures">
      {{#ifprop "prof:hasRole"}}
        <div>
          <dt>{{nls "spec.role"}}</dt>
          {{#eachprop "prof:hasRole"}}<dd>{{label}}</dd>{{/eachprop}}
        </div>
      {{/ifprop}}
    </dl>
    {{resourceDescriptorButton}}
  `,
  rowexpand: `{{#ifprop "prof:isInheritedFrom,dcterms:subject"}}
      <dl class="esbResourcesFeatures">
        {{#ifprop "prof:isInheritedFrom"}}
          <div>
            <dt>{{nls "spec.reusedFrom"}}</dt>
            <dd>{{relatedLink relation="prof:isInheritedFrom" namedClick="spec" class="esbSpecLink"}}</dd>
          </div>
        {{/ifprop}}
        {{#ifprop "dcterms:subject"}}
          <div>{{resourceDescriptorSubject}}</div>
        {{/ifprop}}
      </dl>
    {{/ifprop}}
    {{view filterpredicates="prof:isInheritedFrom,dcterms:subject"}}`,
};
