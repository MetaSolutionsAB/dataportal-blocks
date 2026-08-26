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
      <div>
        <dt>{{nls "concept.conceptUri"}}</dt>
        <dd><code>{{resourceURI}}</code></dd>
      </div>
      <div>
        <dt>{{nls "concept.memberOfTerminology"}}</dt>
        <dd>{{relatedLink
          relation="skos:inScheme"
          namedClick="terminology"
          class="terminologyLink"
        }}</dd>
      </div>
    </dl>
    <div>{{rdfLinks hl=(hinc)}}</div>
  `,
};
