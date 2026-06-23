export default {
  extends: 'template',
  template: `
        <dl>{{specHeaderMetadataMain}}</dl>
        {{#ifprop "dcterms:issued,dcterms:modified,adms:last,adms:next,adms:prev"}}
          <details>
            <summary>{{nls "respec.detailsMoreDetailsOnThisDocument"}}</summary>
            <dl>{{specHeaderMetadataDetails}}</dl>
          </details>
        {{/ifprop}}`,
};
