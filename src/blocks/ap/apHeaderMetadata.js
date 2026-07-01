/**
 * AP header metadata block: renders the always-visible metadata list
 * (`apHeaderMetadataMain`) plus a collapsible `<details>` with the secondary
 * fields (`apHeaderMetadataDetails`), shown only when any date/version
 * property is present.
 */
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
