export default {
  entrystore: 'https://sandbox.admin.dataportal.se/store',
  namespaces: {
    prof: 'http://www.w3.org/ns/dx/prof/',
    skos: 'http://www.w3.org/2004/02/skos/core#',
  },
  clicks: {
    'def': 'def.html',
    'spec': './specification.html',
    'organization': './organization.html',
    'concepts': './concepts.html',
    'conceptScheme': './terminology.html',
  },
  page_language: 'sv',
  nls: {
    sv: {
      conceptScheme: {
        conceptScheme: 'Terminologi',
        usedInSpecification: 'Används i {{PLURAL:${count}|1 interoperabel specifikation|${count} interoperabla specifikationer}}',
        introducedInSpecification: 'Introduceras i specifikation',
        reusedInSpecification: 'Återanvänds i specifikation',
        terminologyUri: 'Adress för terminologin',
        reusedNumberInfo: '{{PLURAL:${count}|Interoperabel specifikation|Interoperabla specifikationer}} som använder denna terminologi.',
        conceptsInTerminology: 'I terminologin ingår ${count} begrepp',
        usageInSpecIntro: 'Lite fast text som förklarar övergången till "använding i specifikationer".',
      },
      concept: {
        concept: 'Begrepp',
        memberOfTerminology: 'Ingår i terminologi',
      },
      general: {
        details: 'Detaljer',
        download: 'Ladda ner',
        downloadMetadataRdfXml: 'Ladda ner metadata som RDF/XML',
        downloadMetadataTurtle: 'Ladda ner metadata som TURTLE',
        downloadMetadataJsonLd: 'Ladda ner metadata som JSON-LD',
      },
    },
    en: {
      conceptScheme: {
        conceptScheme: 'Terminology',
        usedInSpecification: 'Used in ${count} interoperable {{PLURAL:${count}|specification|specifications}}',
        introducedInSpecification: 'Introduced in specification',
        reusedInSpecification: 'Reused in specification',
        terminologyUri: 'Terminology URI',
        reusedNumberInfo: '{{PLURAL:${count}|Interoperable specification|Interoperable specifications}} that use this terminology.',
        conceptsInTerminology: 'The terminology includes {{PLURAL:${count}|${count} concept|${count} concepts}}',
        usageInSpecIntro: 'Some fixed text explaining the transition to "used in specifications".',
      },
      concept: {
        concept: 'Concept',
        memberOfTerminology: 'Member of terminology',
      },
      general: {
        details: 'Details',
        download: 'Download',
        downloadMetadataRdfXml: 'Download metadata as RDF/XML',
        downloadMetadataTurtle: 'Download metadata as TURTLE',
        downloadMetadataJsonLd: 'Download metadata as JSON-LD',
      },
    },
  },
  routes: [
    {
      regex: /\/def.html\?esc_uri=(.+)/,
      uri: 1,
      constraints: {
        'rdf:type': ['skos:Concept', 'skos:ConceptScheme'],
      },
    },
    {
      regex: /\/def.html#esc_uri=(.+)/,
      uri: 1,
      constraints: {
        'rdf:type': ['skos:Concept', 'skos:ConceptScheme'],
      },
    },
  ],
};
