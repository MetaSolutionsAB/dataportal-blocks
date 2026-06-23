export default {
  extends: 'template',
  template: `
      {{#ifprop "prof:hasArtifact"}}
        <a target="_blank" class="float-right btn btn-sm btn-default primaryBtn" href="{{prop "prof:hasArtifact"}}">{{nls "spec.goToResource"}}</a>
      {{/ifprop}}
      {{#ifprop "prof:hasArtifact" invert=true}}
        <a target="_blank" class="float-right btn btn-sm btn-default primaryBtn" href="{{resourceURI}}">{{nls "spec.goToResource"}}</a>
      {{/ifprop}}
      `,
};
