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
  listplaceholder: '<div class="alert alert-info" role="alert">{{placeholderText}}</div>',
  rowhead: `{{resourceDescriptorTypeMarker}}
    <h{{hl}}>{{text class="specPart"}}</h{{hl}}>
    <dl class="esbResourcesFeatures">
      <dt>{{nls "spec.role"}}</dt>
      <dd>{{#eachprop "prof:hasRole"}}{{label}}{{separator}}{{/eachprop}}</dd>
      {{#ifprop "prof:isInheritedFrom"}}
        <dt>{{nls "spec.reusedFrom"}}</dt>
        <dd>{{relatedLink relation="prof:isInheritedFrom" namedClick="spec" class="esbSpecLink"}}</dd>
      {{/ifprop}}
    </dl>
    {{resourceDescriptorButton}}
  `,
  rowexpand: `{{resourceDescriptorSubject}}
    {{view filterpredicates="prof:isInheritedFrom,dcterms:subject"}}`,
};
