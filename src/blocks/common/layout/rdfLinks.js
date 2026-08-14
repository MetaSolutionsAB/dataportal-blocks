/**
 * Renders a "Download" heading plus links to the entry's metadata in RDF/XML,
 * Turtle, and JSON-LD (URLs built from `metadataURI`).
 *
 * Params:
 * - `hl` ('3') — heading level for the "Download" title.
 * CSS: container gets `esbRdfLinks esbInlineList esbInlineVerticalList`.
 * - `recursive` (undefined) — if set, adds `recursive=...` to the download URLs.
 */
export default {
  extends: 'template',
  recursive: undefined,
  hl: '3',
  template: `
    <h{{hl}}>{{nls "general.download"}}</h{{hl}}>
    <div class="esbRdfLinks esbInlineList esbInlineVerticalList">
      <a href="{{metadataURI}}?{{#if recursive}}recursive={{recursive}}&{{/if}}format=application/rdf+xml" rel="noopener">{{nls "general.downloadMetadataRdfXml"}}</a>
      <a href="{{metadataURI}}?{{#if recursive}}recursive={{recursive}}&{{/if}}format=text/turtle" rel="noopener">{{nls "general.downloadMetadataTurtle"}}</a>
      <a href="{{metadataURI}}?{{#if recursive}}recursive={{recursive}}&{{/if}}format=text/n-triples" rel="noopener">{{nls "general.downloadMetadataNTriples"}}</a>
      <a href="{{metadataURI}}?{{#if recursive}}recursive={{recursive}}&{{/if}}format=application/ld+json" rel="noopener">{{nls "general.downloadMetadataJsonLd"}}</a>
    </div>
  `,
};
