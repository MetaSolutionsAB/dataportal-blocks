export default {
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
    'https://sandbox.editera.dataportal.se/theme/templates/prof.json', // todo: update
    'https://sandbox.editera.dataportal.se/theme/templates/terms.json', // todo: update
  ],
  // terms.json needs skosBundle + dctermsBundle for most of the item ids it
  // references, and escBundle for skosmos:relations. No per-bundle selection
  // exists, so standalone skos.json/dcterms.json are not a substitute.
  defaultBundles: true,
  clicks: {
    spec: '',
    organization: '',
    concept: '',
    terminology: '',
    class: '',
    vocabulary: '', // todo: phase out, some are property
    property: '',
    ap: '',
    shape: '',
    datavoc: '',
    dataset: '',
  },
  type2template: {
    'prof:Profile': 'prof:Profile',
    'dcterms:Standard': 'prof:Profile',
    'skos:ConceptScheme': 'skosmos:conceptSchemeWithPublisher',
    'skos:Concept': 'editera:Concept',
    'rdfs:Class': 'rdfs:Class',
    'rdf:Property': 'rdf:Property',
    'prof:ResourceDescriptor': 'editera:prof:ResourceDescriptor',
  }
};
