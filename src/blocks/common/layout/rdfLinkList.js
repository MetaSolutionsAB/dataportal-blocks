/* @todo: Investigate which callers need recursive and if any need cachedExternal. */
/**
 * Renders the `<dl>` row offering the entry's metadata for download: the `<dt>`,
 * then one `<dd>` per serialisation — RDF/XML, Turtle, N-Triples and JSON-LD,
 * with URLs built from `metadataURI`.
 *
 * Must be written as the sole child of a `<div>` in the `<dl>`, with no
 * surrounding whitespace — `<div>{{rdfLinkList}}</div>`, the same rule as
 * `predicateRefList` and `resourceUriRow` (see the `<dl>` shape in
 * `src/README.md`).
 *
 * The `<dt>` labels the row rather than heading a section, which is also what the
 * markup allows: `<dt>` may not contain heading content.
 *
 * Params:
 * - `recursive` ('') — if set, adds `recursive=...` to the download URLs.
 * CSS: emits `esbRdfLinks` on the row's `<div>`.
 */
export default {
  extends: 'template',
  recursive: '',
  class: 'esbRdfLinks',
  template: `
    <dt>{{nls "general.download"}}</dt>
    <dd>{{rdfLink format="application/rdf+xml" recursive=recursive content="esb_nls:general.downloadMetadataRdfXml"}}</dd>
    <dd>{{rdfLink format="text/turtle" recursive=recursive content="esb_nls:general.downloadMetadataTurtle"}}</dd>
    <dd>{{rdfLink format="text/n-triples" recursive=recursive content="esb_nls:general.downloadMetadataNTriples"}}</dd>
    <dd>{{rdfLink format="application/ld+json" recursive=recursive content="esb_nls:general.downloadMetadataJsonLd"}}</dd>
  `,
};
