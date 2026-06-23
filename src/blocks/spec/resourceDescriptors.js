export default {
  extends: 'list',
  hl: 4,
  relation: 'prof:hasResource',
  dependencyproperties: 'prof:isInheritedFrom',
  expandTooltip: 'esb_nls:spec.moreInformation',
  unexpandTooltip: 'esb_nls:spec.lessInformation',
  listbody: '<div class="resourceDescriptors">{{body}}</div>',
  placeholderText: 'esb_nls:spec.thisSpecificationHasNoResources',
  listplaceholder: '<div class="alert alert-info" role="alert">{{placeholderText}}</div>',
  rowhead: `{{resourceDescriptorButton}}
        <h{{hl}}>{{text class="specPart"}}</h{{hl}}>
        <span>{{nls "spec.role"}}: {{prop "prof:hasRole" render="label"}}</span>
        {{#ifprop "prof:isInheritedFrom"}}
          <br/><span>{{nls "spec.reusedFrom"}}: {{specRelated relation="prof:isInheritedFrom"}}</span>
        {{/ifprop}}`,
  rowexpand: `
        {{view rdformsid="editera:prof:ResourceDescriptor" filterpredicates="prof:isInheritedFrom"}}
        `,
};
