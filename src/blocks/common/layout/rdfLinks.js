/**
 * Renders a "Download" heading plus links to the entry's metadata in RDF/XML,
 * Turtle, and JSON-LD (URLs built from `metadataURI`).
 *
 * Params:
 * - `hl` ('3') — heading level for the "Download" title.
 * CSS: container gets `esbRdfLinks esbInlineList esbInlineVerticalList`.
 */
export default {
  extends: 'template',
  hl: '3',
  template: `
    <h{{hl}}>{{nls "general.download"}}</h{{hl}}>
    <div class="esbRdfLinks esbInlineList esbInlineVerticalList">
      <a href="{{metadataURI}}?format=application/rdf+xml" rel="noopener">{{nls "general.downloadMetadataRdfXml"}}</a>
      <a href="{{metadataURI}}?format=text/turtle" rel="noopener">{{nls "general.downloadMetadataTurtle"}}</a>
      <a href="{{metadataURI}}?format=application/ld+json" rel="noopener">{{nls "general.downloadMetadataJsonLd"}}</a>
    </div>
  `,
};
