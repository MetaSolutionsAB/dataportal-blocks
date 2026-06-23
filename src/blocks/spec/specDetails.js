export default {
  extends: 'template',
  template: `
      <h2>{{nls "spec.aboutTheSpecification"}}</h2>
      {{#ifprop "prof:isProfileOf"}}
{{nls "respec.profileOf"}}:
{{specElements relation="prof:isProfileOf" vertical="true" namedclick="spec"}}
{{/ifprop}}
{{view onecol="true" filterpredicates="dcterms:title,dcterms:description,dcterms:publisher,prof:hasResource,prof:isProfileOf" showLanguage="false" rdformsid="prof:Profile"}}
{{rdfLinks}}`
};
