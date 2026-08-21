export default {
  sv: {
    datavoc: {
      datavoc: 'Datavokabulär',
      datavocUri: 'Adress för datavokabulären',
      classesInDatavoc:
        'I datavokabulären ingår {{PLURAL:${count}|${count} klass|${count} klasser}}',
      propertiesInDatavoc:
        'I datavokabulären ingår {{PLURAL:${count}|${count} egenskap|${count} egenskaper}}',
      reusedNumberInfo:
        '{{PLURAL:${count}|Interoperabel specifikation|Interoperabla specifikationer}} använder denna datavokabulär.',
      showAllClasses: 'Visa alla klasser',
      showAllProperties: 'Visa alla egenskaper',
      noClasses: 'Datavokabulären innehåller inga klasser.',
      noProperties: 'Datavokabulären innehåller inga egenskaper.',
    },
    class: {
      class: 'Klass',
      classUri: 'Adress för klassen',
      subClassOf: 'Underklass till',
      reusedNumberInfo:
        '{{PLURAL:${count}|Interoperabel specifikation|Interoperabla specifikationer}} använder denna klass.',
    },
    property: {
      property: 'Egenskap',
      propertyUri: 'Adress för egenskapen',
      domain: 'Domän',
      range: 'Värdemängd',
      subPropertyOf: 'Underegenskap till',
      reusedNumberInfo:
        '{{PLURAL:${count}|Interoperabel specifikation|Interoperabla specifikationer}} använder denna egenskap.',
    },
    conceptScheme: {
      conceptScheme: 'Terminologi',
      terminologyUri: 'Adress för terminologin',
      reusedNumberInfo:
        '{{PLURAL:${count}|Interoperabel specifikation|Interoperabla specifikationer}} använder denna terminologi.',
      conceptsInTerminology: 'I terminologin ingår ${count} begrepp',
      conceptCount: 'Totalt antal begrepp',
      showAllConcepts: 'Visa alla begrepp',
    },
    concept: {
      concept: 'Begrepp',
      altLabel: 'Alternativa termer',
      conceptUri: 'Adress för begreppet',
      isTopConcept: 'Detta är ett begrepp på översta nivån',
      noNarrowerConcepts: 'Har inga underordnade begrepp',
      noRelatedConcepts: 'Har inga relaterade begrepp',
      broaderConcepts: 'Överordnade begrepp',
      narrowerConcepts: 'Underordnade begrepp',
      relatedConcepts: 'Relaterade begrepp',
      matchingConcepts: 'Matchande begrepp (I andra terminologier)',
      memberOfTerminology: 'Ingår i terminologi',
      exactMatch: 'Samma',
      closeMatch: 'Snarlika',
      relatedMatch: 'Relaterade',
      broadMatch: 'Överordnade',
      narrowMatch: 'Underordnade',
      conceptOverflow:
        'Ytterligare {{PLURAL:${count}|1 begrepp|${count} begrepp}} kunde inte visas.',
    },
    general: {
      details: 'Detaljer',
      description: 'Beskrivning',
      seeAlso: 'Se även',
      compositeValue: 'Sammansatt värde',
      download: 'Ladda ner',
      loading: 'Laddar resultat…',
      introducedInSpecification: 'Introduceras i specifikation',
      reusedInSpecification: 'Återanvänds i specifikation',
      noReuseInSpecification:
        'Återanvändning spåras enbart för interoperabla specifikationer.',
      usedInSpecification:
        'Används i ${count} {{PLURAL:${count}|interoperabel specifikation|interoperabla specifikationer}}',
      isPartOfDatavoc: 'Ingår i datavokabulär',
      downloadMetadataRdfXml: 'Ladda ner metadata som RDF/XML',
      downloadMetadataTurtle: 'Ladda ner metadata som TURTLE',
      downloadMetadataNTriples: 'Ladda ner metadata som N-TRIPLES',
      downloadMetadataJsonLd: 'Ladda ner metadata som JSON-LD',
      showMore: 'Visa mer',
      showLess: 'Visa mindre',
    },
    ap: {
      usageNote: 'Användningsanmärkning',
    },
    spec: {
      specificationUri: 'Adress för specifikation',
      exploreAP: 'Utforska applikationsprofil',
      classesAndProperties: 'Klasser och egenskaper',
      classesIntroduced:
        '{{PLURAL:${count}|1 introducerad Klass|${count} introducerade Klasser}} (I denna specifikation)',
      propertiesIntroduced:
        '{{PLURAL:${count}|1 introducerad Egenskap|${count} introducerade Egenskaper}} (I denna specifikation)',
      classesReused:
        '{{PLURAL:${count}|1 återanvänd Klass|${count} återanvända Klasser}} (Från andra specifikationer)',
      propertiesReused:
        '{{PLURAL:${count}|1 återanvänd Egenskap|${count} återanvända Egenskaper}} (Från andra specifikationer)',
      classOverflow:
        'Ytterligare {{PLURAL:${count}|1 klass|${count} klasser}} kunde inte visas.',
      propertyOverflow:
        'Ytterligare {{PLURAL:${count}|1 egenskap|${count} egenskaper}} kunde inte visas.',
      resources: 'Resurser',
      rIntroduced: 'Introducerade (I denna specifikation)',
      rReused: 'Återanvända (Från andra specifikationer)',
      showMore: 'Visa mer',
      showLess: 'Visa mindre',
      thisSpecificationHasNoResources: 'Denna specifikation har inga resurser.',
      thisSpecificationHasNoReusedResources:
        'Denna specifikation har inga återanvända resurser.',
      goToResource: 'Gå till resurs',
      role: 'Roll',
      subject: 'Beskriver',
      reusedFrom: 'Återanvänd ifrån',
      aboutTheSpecification: 'Om specifikationen',
      foundationalInspec: 'Interoperabel basspecifikation',
      profileInspec: 'Interoperabel profilspecifikation',
      nonInspec: 'Specifikation',
      conformanceNumberInfo:
        '{{PLURAL:${count}|Datamängd|Datamängder}} följer denna specifikation.',
      grunddataConformanceNumberInfo:
        'Varav {{PLURAL:${count}|${count}|${count} stycken}} är nationell grunddatamängd:',
      inspecTypeSkos: 'terminologi',
      inspecTypeRdfs: 'datavokabulär',
      inspecTypeShacl: 'applikationsprofil',
      inspecTypeSvg: 'diagram',
      grunddata: 'Nationell grunddata',
      keyword: 'Nyckelord',
    },
    respec: {
      backToTheOverview: 'Tillbaka till översikten',
      detailsMoreDetailsOnThisDocument: 'Fler detaljer om detta dokument',
      profileOf: 'Profil av',
      preferredIdentifier: 'Föredragen identifierare',
      createdBy: 'Skapad av',
      stableAddressToThisVersion: 'Stabil adress för denna version',
      publicationDate: 'Publiceringsdatum',
      modificationDate: 'Ändringsdatum',
      lastVersion: 'Senaste version',
      prevVersion: 'Föregående version',
      nextVersion: 'Nästa version',
      diagram: 'Diagram',
    },
  },
  en: {
    datavoc: {
      datavoc: 'Data Vocabulary',
      datavocUri: 'Uri for the data vocabulary',
      classesInDatavoc:
        'The data vocabulary includes {{PLURAL:${count}|${count} class|${count} classes}}',
      propertiesInDatavoc:
        'The data vocabulary includes {{PLURAL:${count}|${count} property|${count} properties}}',
      reusedNumberInfo:
        '{{PLURAL:${count}|Interoperable specification|Interoperable specifications}} use this data vocabulary.',
      showAllClasses: 'Show all classes',
      showAllProperties: 'Show all properties',
      noClasses: 'The data vocabulary contains no classes.',
      noProperties: 'The data vocabulary contains no properties.',
    },
    class: {
      class: 'Class',
      classUri: 'Uri for the class',
      subClassOf: 'Subclass of',
      reusedNumberInfo:
        '{{PLURAL:${count}|Interoperable specification|Interoperable specifications}} use this class.',
    },
    property: {
      property: 'Property',
      propertyUri: 'Uri for the property',
      domain: 'Domain',
      range: 'Range',
      subPropertyOf: 'Subproperty of',
      reusedNumberInfo:
        '{{PLURAL:${count}|Interoperable specification|Interoperable specifications}} use this property.',
    },
    conceptScheme: {
      conceptScheme: 'Terminology',
      terminologyUri: 'URI for the terminology',
      reusedNumberInfo:
        '{{PLURAL:${count}|Interoperable specification|Interoperable specifications}} use this terminology.',
      conceptsInTerminology:
        'The terminology includes ${count} {{PLURAL:${count}|concept|concepts}}',
      conceptCount: 'Total number of concepts',
      showAllConcepts: 'Show all concepts',
    },
    concept: {
      concept: 'Concept',
      altLabel: 'Alternative labels',
      conceptUri: 'Uri for the concept',
      isTopConcept: 'This is a top level concept',
      noNarrowerConcepts: 'No narrower concepts',
      noRelatedConcepts: 'No related concepts',
      broaderConcepts: 'Broader concepts',
      narrowerConcepts: 'Narrower concepts',
      relatedConcepts: 'Related concepts',
      matchingConcepts: 'Matching concepts (In other terminologies)',
      memberOfTerminology: 'Member of terminology',
      exactMatch: 'Same',
      closeMatch: 'Similar',
      relatedMatch: 'Related',
      broadMatch: 'Broader',
      narrowMatch: 'Narrower',
      conceptOverflow:
        '{{PLURAL:${count}|1 more concept|${count} more concepts}} could not be shown.',
    },
    general: {
      details: 'Details',
      description: 'Description',
      seeAlso: 'See also',
      compositeValue: 'Composite value',
      download: 'Download',
      loading: 'Loading results…',
      introducedInSpecification: 'Introduced in specification',
      reusedInSpecification: 'Reused in specification',
      noReuseInSpecification:
        'Reuse is only tracked for interoperable specifications.',
      usedInSpecification:
        'Used in ${count} interoperable {{PLURAL:${count}|specification|specifications}}',
      isPartOfDatavoc: 'Is part of data vocabulary',
      downloadMetadataRdfXml: 'Download metadata as RDF/XML',
      downloadMetadataTurtle: 'Download metadata as TURTLE',
      downloadMetadataNTriples: 'Download metadata as N-TRIPLES',
      downloadMetadataJsonLd: 'Download metadata as JSON-LD',
      showMore: 'Show more',
      showLess: 'Show less',
    },
    ap: {
      usageNote: 'Usage note',
    },
    spec: {
      specificationUri: 'URI for the specification',
      exploreAP: 'Explore the application profile',
      classesAndProperties: 'Classes and properties',
      classesIntroduced:
        '{{PLURAL:${count}|1 introduced Class|${count} introduced Classes}} (In this specification)',
      propertiesIntroduced:
        '{{PLURAL:${count}|1 introduced Property|${count} introduced Properties}} (In this specification)',
      classesReused:
        '{{PLURAL:${count}|1 reused Class|${count} reused Classes}} (From other specifications)',
      propertiesReused:
        '{{PLURAL:${count}|1 reused Property|${count} reused Properties}} (From other specifications)',
      classOverflow:
        '{{PLURAL:${count}|1 more class|${count} more classes}} could not be shown.',
      propertyOverflow:
        '{{PLURAL:${count}|1 more property|${count} more properties}} could not be shown.',
      resources: 'Resources',
      rIntroduced: 'Introduced (In this specification)',
      rReused: 'Reused (From other specifications)',
      showMore: 'Show more',
      showLess: 'Show less',
      thisSpecificationHasNoResources: 'This specification has no resources.',
      thisSpecificationHasNoReusedResources:
        'This specification has no reused resources.',
      goToResource: 'Go to resource',
      role: 'Role',
      subject: 'Subject',
      reusedFrom: 'Reused from',
      aboutTheSpecification: 'About the specification',
      foundationalInspec: 'Foundational interoperable specification',
      profileInspec: 'Profile interoperable specification',
      nonInspec: 'Specification',
      conformanceNumberInfo:
        '{{PLURAL:${count}|Dataset|Datasets}} conform to this specification.',
      grunddataConformanceNumberInfo:
        'Of which {{PLURAL:${count}|${count} is a national basic dataset|${count} are national basic datasets}}:',
      inspecTypeSkos: 'terminology',
      inspecTypeRdfs: 'data vocabulary',
      inspecTypeShacl: 'application profile',
      inspecTypeSvg: 'diagram',
      grunddata: 'National basic data',
      keyword: 'Keywords',
    },
    respec: {
      backToTheOverview: 'Back to the overview',
      detailsMoreDetailsOnThisDocument: 'More details about this document',
      profileOf: 'Profile of',
      preferredIdentifier: 'Preferred identifier',
      createdBy: 'Created by',
      stableAddressToThisVersion: 'Stable address to this version',
      publicationDate: 'Publication date',
      modificationDate: 'Modification date',
      lastVersion: 'Latest version',
      prevVersion: 'Previous version',
      nextVersion: 'Next version',
      diagram: 'Diagram',
    },
  },
};
