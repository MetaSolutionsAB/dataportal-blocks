/* @todo: Investigate which callers need recursive and if any need cachedExternal. */
/**
 * Renders a "Download" heading plus links to the entry's metadata in RDF/XML,
 * Turtle, N-Triples, and JSON-LD (URLs built from `metadataURI`).
 *
 * Params:
 * - `hl` ('3') — heading level for the "Download" title.
 * - `recursive` ('') — if set, adds `recursive=...` to the download URLs.
 * CSS: container gets `esbRdfLinks esbInlineList esbInlineVerticalList`.
 */
export default {
  extends: 'template',
  recursive: '',
  hl: '3',
  template: `
    <h{{hl}}>{{nls "general.download"}}</h{{hl}}>
    <div class="esbRdfLinks esbInlineList esbInlineVerticalList">
      {{rdfLink format="application/rdf+xml" recursive=recursive content="esb_nls:general.downloadMetadataRdfXml"}}
      {{rdfLink format="text/turtle" recursive=recursive content="esb_nls:general.downloadMetadataTurtle"}}
      {{rdfLink format="text/n-triples" recursive=recursive content="esb_nls:general.downloadMetadataNTriples"}}
      {{rdfLink format="application/ld+json" recursive=recursive content="esb_nls:general.downloadMetadataJsonLd"}}
    </div>
  `,
};
