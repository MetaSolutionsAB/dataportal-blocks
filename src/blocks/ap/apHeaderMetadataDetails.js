/**
 * Secondary AP header metadata rows shown inside the collapsible `<details>`:
 * publication/modification dates and the latest/next/previous version links.
 */
export default {
  extends: 'template',
  template: `
        {{#ifprop "dcterms:issued"}}
          <dt>{{nls "respec.publicationDate"}}:</dt>
          <dd>{{apDate}}</dd>
        {{/ifprop}}
        {{#ifprop "dcterms:modified"}}
          <dt>{{nls "respec.modificationDate"}}:</dt>
          <dd>{{apDateModified}}</dd>
        {{/ifprop}}
        {{#ifprop "adms:last"}}
          <dt>{{nls "respec.latestVersion"}}:</dt>
          <dd>{{apRelated relation="adms:last"}}</dd>
        {{/ifprop}}
        {{#ifprop "adms:next"}}
          <dt>{{nls "respec.nextVersion"}}:</dt>
          <dd>{{apRelated relation="adms:next"}}</dd>
        {{/ifprop}}
        {{#ifprop "adms:prev"}}
          <dt>{{nls "respec.lastVersion"}}:</dt>
          <dd>{{apRelated relation="adms:prev"}}</dd>
        {{/ifprop}}
      `,
};
