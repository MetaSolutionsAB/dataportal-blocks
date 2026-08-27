/**
 * Aside infobox for the Concept page: concept URI, owning-terminology link,
 * and RDF download links.
 *
 * Params:
 * - `hl` ('2') — heading level for the infobox heading.
 * CSS: emits `esbInfobox`.
 */
export default {
  extends: 'template',
  hl: '2',
  class: 'esbInfobox',
  template: `
    <h{{hl}}>{{nls "general.details"}}</h{{hl}}>
    <dl>
      <div>{{resourceUriRow
        dtContent="esb_nls:concept.conceptUri"
      }}</div>
      <div>
        <dt>{{nls "concept.memberOfTerminology"}}</dt>
        <dd>{{relatedLink
          relation="skos:inScheme"
          namedClick="terminology"
          linkClass="esbTerminologyLink"
        }}</dd>
      </div>
    </dl>
    <div>{{rdfLinkList hl=(hinc)}}</div>
  `,
};
