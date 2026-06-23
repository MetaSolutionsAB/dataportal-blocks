export default {
  extends: 'template',
  template: `
<p>{{text property="dcterms:description"}}</p>
{{diagramImage}}
{{#ifprop "inspec:introduces,inspec:reuses"}}
  <h2>{{nls "spec.classesAndProperties"}}</h2>
  {{#ifprop "inspec:introduces"}}
    <h3 class="specElements">{{nls "spec.cpIntroduced"}}</h3>
    {{specElements relation="inspec:introduces" namedclick="vocabulary"}}
  {{/ifprop}}
  {{#ifprop "inspec:reuses"}}
    <h3 class="specElements">{{nls "spec.cpReused"}}</h3>
    {{specElements relation="inspec:reuses" namedclick="vocabulary"}}
  {{/ifprop}}
{{/ifprop}}
<h2>{{nls "spec.resources"}}</h2>
<details open>
  <summary>{{nls "spec.rIntroduced"}}</summary>
  {{introducedResourceDescriptors}}
</details>
<details>
  <summary>{{nls "spec.rReused"}}</summary>
  {{reusedResourceDescriptors}}
</details>`
};
