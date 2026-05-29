export default {
  extends: 'template',
  hl: '3',
  template: `
    <h{{hl}}>{{nls "general.download"}}</h{{hl}}>
    <div class="rdfLinks esbInlineList esbInlineVerticalList">
      <a href="{{metadataURI}}?format=application/rdf+xml" rel="noopener">{{nls "general.downloadMetadataRdfXml"}}</a>
      <a href="{{metadataURI}}?format=text/turtle" rel="noopener">{{nls "general.downloadMetadataTurtle"}}</a>
      <a href="{{metadataURI}}?format=application/ld+json" rel="noopener">{{nls "general.downloadMetadataJsonLd"}}</a>
    </div>
  `,
};
