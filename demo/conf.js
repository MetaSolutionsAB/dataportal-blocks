window.__entryscape_config = []
  .concat(window.__entryscape_config)
  .filter(Boolean)
  .concat([
    {
      block: 'config',
      entrystore: 'https://sandbox.admin.dataportal.se/store',
      urlQueryParameters: true, //todo: determine if needed/desired
      clicks: {
        spec: './specification.html',
        organization: './organisation.html',
        concept: './concept.html',
        terminology: './terminology.html',
        class: './class.html',
        property: './property.html',
        ap: './ap.html',
        datavoc: './datavoc.html',
        dataset: './dataset.html', // todo: point to the canonical one
        // The demo has no filtered search; these mirror the shape a host
        // supplies so the generated href can be inspected.
        conceptSearch: 'esb:./index.html?f=${uri}&rt=term_concept',
        classSearch: 'esb:./index.html?f=${uri}&rt=term_class',
        propertySearch: 'esb:./index.html?f=${uri}&rt=term_property',
        classLookup: './class.html',
        propertyLookup: './property.html',
        terminologyLookup: './terminology.html',
        shapeLookup: './ap.html', // not yet supported
      },
      routes: [
        // Not yet supported, later consumed by ap/initSpec.js
        {
          regex: /\/ap.html[?#]esc_shape=(.+)/,
          lookup: 1,
          lookupURI: 'dcterms:hasPart',
          constraints: {
            'rdf:type': ['prof:Profile', 'dcterms:Standard'],
          },
        },
      ],
      page_language: 'sv',
    },
  ]);
