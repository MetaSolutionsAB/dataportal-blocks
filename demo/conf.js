window.__entryscape_config = []
  .concat(window.__entryscape_config)
  .filter(Boolean)
  .concat([{
    block: 'config',
    entrystore: 'https://sandbox.admin.dataportal.se/store',
    urlQueryParameters: true, //todo: determine if needed/desired
    clicks: {
      spec: './specification.html',
      organization: './organisation.html',
      concept: './concept.html',
      terminology: './terminology.html',
      class: './class.html',
      vocabulary: './class.html', // todo: phase out, some are property
      property: './property.html',
      ap: './ap.html',
      shape: './ap.html',
      datavoc: './datavoc.html',
      dataset: './dataset.html', // todo: point to the canonical one
    },
    routes: [
      // Consumed by ap/initSpec.js
      {
        regex: /\/ap.html[?#]esc_shape=(.+)/,
        lookup: 1,
        lookupURI: 'dcterms:hasPart',
        constraints: {
          'rdf:type': ['prof:Profile', 'dcterms:Standard'],
        },
      },
    ],
    page_language: 'sv'
  }]);