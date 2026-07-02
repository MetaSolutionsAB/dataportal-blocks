export default {
  entrystore: 'https://sandbox.admin.dataportal.se/store',
  urlQueryParameters: true, //todo: determine if needed/desired
  namespaces: {
    prof: 'http://www.w3.org/ns/dx/prof/',
    profrole: 'http://www.w3.org/ns/dx/prof/role/',
    skos: 'http://www.w3.org/2004/02/skos/core#',
    adms: 'http://www.w3.org/ns/adms#',
    inspec: 'https://w3id.org/inspec/datavoc/',
  },
  bundles: [
    'https://static.infra.entryscape.com/suite/latest/templates/dcat3.json',
    'https://static.infra.entryscape.com/suite/latest/templates/rdfs.json', // rdfs bundled with Blocks is minimal
    'https://sandbox.editera.dataportal.se/theme/templates/adms.json', // todo: update
    'https://sandbox.editera.dataportal.se/theme/templates/prof.json', // todo: update
    'https://sandbox.editera.dataportal.se/theme/templates/terms.json', // todo: update
  ],
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
  type2template: {
    'prof:Profile': 'prof:Profile',
    'dcterms:Standard': 'prof:Profile',
    'skos:ConceptScheme': 'skosmos:conceptSchemeWithPublisher',
    'skos:Concept': 'editera:Concept',
    'rdfs:Class': 'rdfs:Class',
    'rdf:Property': 'rdf:Property',
    'prof:ResourceDescriptor': 'editera:prof:ResourceDescriptor',
  },
  routes: [
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
};
