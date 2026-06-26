export default {
  extends: 'template',
  template: `
        <dl>{{apHeaderMetadataMain}}</dl>
        {{#ifprop "dcterms:issued,dcterms:modified,adms:last,adms:next,adms:prev"}}
          <details>
            <summary>{{nls "respec.detailsMoreDetailsOnThisDocument"}}</summary>
            <dl>{{apHeaderMetadataDetails}}</dl>
          </details>
        {{/ifprop}}`,
};
