export default {
  extends: 'template',
  template: `
        {{#ifprop "dcterms:issued"}}
          <dt>{{nls "respec.publicationDate"}}:</dt>
          <dd>{{specDate}}</dd>
        {{/ifprop}}
        {{#ifprop "dcterms:modified"}}
          <dt>{{nls "respec.modificationDate"}}:</dt>
          <dd>{{specDateModified}}</dd>
        {{/ifprop}}
        {{#ifprop "adms:last"}}
          <dt>{{nls "respec.latestVersion"}}:</dt>
          <dd>{{specRelated}}</dd>
        {{/ifprop}}
        {{#ifprop "adms:next"}}
          <dt>{{nls "respec.nextVersion"}}:</dt>
          <dd>{{specRelated relation="adms:next"}}</dd>
        {{/ifprop}}
        {{#ifprop "adms:prev"}}
          <dt>{{nls "respec.lastVersion"}}:</dt>
          <dd>{{specRelated relation="adms:prev"}}</dd>
        {{/ifprop}}
      `,
};
