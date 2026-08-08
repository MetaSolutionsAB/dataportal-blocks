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
      usageInSpecIntro:
        'Lite fast text som förklarar övergången till "användning i specifikationer".',
    },
    class: {
      class: 'Klass',
      classUri: 'Adress för klassen',
      subClassOf: 'Underklass till',
      reusedNumberInfo:
        '{{PLURAL:${count}|Interoperabel specifikation|Interoperabla specifikationer}} använder denna klass.',
      usageInSpecIntro:
        'Lite fast text som förklarar övergången till "användning i specifikationer".',
    },
    property: {
      property: 'Egenskap',
      propertyUri: 'Adress för egenskapen',
      domain: 'Domän',
      range: 'Värdemängd',
      subPropertyOf: 'Underegenskap till',
      reusedNumberInfo:
        '{{PLURAL:${count}|Interoperabel specifikation|Interoperabla specifikationer}} använder denna egenskap.',
      usageInSpecIntro:
        'Lite fast text som förklarar övergången till "användning i specifikationer".',
    },
    conceptScheme: {
      conceptScheme: 'Terminologi',
      reusedInSpecification: 'Återanvänds i specifikation',
      terminologyUri: 'Adress för terminologin',
      reusedNumberInfo:
        '{{PLURAL:${count}|Interoperabel specifikation|Interoperabla specifikationer}} använder denna terminologi.',
      topConceptsInTerminology:
        'I terminologin ingår ${count} begrepp på översta nivån',
      conceptCount: 'Totalt antal begrepp',
      usageInSpecIntro:
        'Lite fast text som förklarar övergången till "användning i specifikationer".',
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
    },
    general: {
      details: 'Detaljer',
      description: 'Beskrivning',
      seeAlso: 'Se även',
      compositeValue: 'Sammansatt värde',
      download: 'Ladda ner',
      loading: 'Laddar resultat…',
      introducedInSpecification: 'Introduceras i specifikation',
      usedInSpecification:
        'Används i {{PLURAL:${count}|1 interoperabel specifikation|${count} interoperabla specifikationer}}',
      isPartOfDatavoc: 'Ingår i datavokabulär',
      downloadMetadataRdfXml: 'Ladda ner metadata som RDF/XML',
      downloadMetadataTurtle: 'Ladda ner metadata som TURTLE',
      downloadMetadataNTriples: 'Ladda ner metadata som N-TRIPLES',
      downloadMetadataJsonLd: 'Ladda ner metadata som JSON-LD',
    },
    ap: {
      usageNote: 'Användningsanmärkning',
    },
    spec: {
      specificationUri: 'Adress för specifikation',
      exploreAP: 'Utforska applikationsprofil',
      classesAndProperties: 'Klasser och egenskaper',
      cpIntroduced:
        '{{PLURAL:${count}|1 introducerad Klass eller Egenskap|${count} introducerade Klasser och Egenskaper}} (I denna specifikation)',
      cpReused:
        '{{PLURAL:${count}|1 återanvänd Klass eller Egenskap|${count} återanvända Klasser och Egenskaper}} (Från andra specifikationer)',
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
      usageInSpecIntro:
        'Some fixed text explaining the transition to "used in specifications".',
    },
    class: {
      class: 'Class',
      classUri: 'Uri for the class',
      subClassOf: 'Subclass of',
      reusedNumberInfo:
        '{{PLURAL:${count}|Interoperable specification|Interoperable specifications}} use this class.',
      usageInSpecIntro:
        'Some fixed text explaining the transition to "used in specifications".',
    },
    property: {
      property: 'Property',
      propertyUri: 'Uri for the property',
      domain: 'Domain',
      range: 'Range',
      subPropertyOf: 'Subproperty of',
      reusedNumberInfo:
        '{{PLURAL:${count}|Interoperable specification|Interoperable specifications}} use this property.',
      usageInSpecIntro:
        'Some fixed text explaining the transition to "used in specifications".',
    },
    conceptScheme: {
      conceptScheme: 'Terminology',
      reusedInSpecification: 'Reused in specification',
      terminologyUri: 'URI for the terminology',
      reusedNumberInfo:
        '{{PLURAL:${count}|Interoperable specification|Interoperable specifications}} use this terminology.',
      topConceptsInTerminology:
        'The terminology includes {{PLURAL:${count}|${count} concept|${count} concepts}} on the top level',
      conceptCount: 'Total number of concepts',
      usageInSpecIntro:
        'Some fixed text explaining the transition to "used in specifications".',
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
    },
    general: {
      details: 'Details',
      description: 'Description',
      seeAlso: 'See also',
      compositeValue: 'Composite value',
      download: 'Download',
      loading: 'Loading results…',
      introducedInSpecification: 'Introduced in specification',
      usedInSpecification:
        'Used in ${count} interoperable {{PLURAL:${count}|specification|specifications}}',
      isPartOfDatavoc: 'Is part of data vocabulary',
      downloadMetadataRdfXml: 'Download metadata as RDF/XML',
      downloadMetadataTurtle: 'Download metadata as TURTLE',
      downloadMetadataNTriples: 'Download metadata as N-TRIPLES',
      downloadMetadataJsonLd: 'Download metadata as JSON-LD',
    },
    ap: {
      usageNote: 'Usage note',
    },
    spec: {
      specificationUri: 'URI for the specification',
      exploreAP: 'Explore the application profile',
      classesAndProperties: 'Classes and properties',
      cpIntroduced:
        '{{PLURAL:${count}|1 introduced Class or Property|${count} introduced Classes and Properties}} (In this specification)',
      cpReused:
        '{{PLURAL:${count}|1 reused Class or Property|${count} reused Classes and Properties}} (From other specifications)',
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
