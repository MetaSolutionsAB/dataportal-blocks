// todo: add button going to datset search with filter conformsTo=this_spec

/*
 * The before script identifies any dcat:Dataset which dcterms:conformsTo
 * the given specification. It then identifies the subset of these which
 * are 'nationell grunddatamängd'.
 */
export default {
  extends: 'template',
  before: async function (node, data, registry) {
    const grunddataPrefix = 'https://dataportal.se/concepts/grunddata/';
    const es = registry.get('entrystore');
    const isCached = typeof data.entry === 'string';
    const entry = isCached
      ? es.getCache().get(es.getEntryURI(data.context, data.entry))
      : data.entry;
    let resultSize = 0;
    let grunddataResults = [];
    await es
      .newSolrQuery()
      .rdfType('dcat:Dataset')
      .uriProperty('dcterms:conformsTo', entry.getResourceURI())
      .forEach((conformantEntry) => {
        resultSize += 1;
        const isGrunddata = conformantEntry.getMetadata()
          .find(conformantEntry.getResourceURI(), 'dcterms:subject')
          .filter(stmt => stmt.getValue().startsWith(grunddataPrefix))
          .length > 0;
        if (isGrunddata) grunddataResults.push(conformantEntry)
      });

    let example;
    if (grunddataResults.length > 0) {
      const exampleEntry = grunddataResults[0];
      example = {
        context: exampleEntry.getContext().getId(),
        entry: exampleEntry.getId(),
        uri: exampleEntry.getURI(),
        ruri: exampleEntry.getResourceURI(),
      };
    }

    data.resultSize = resultSize;
    data.example = example;
    data.grunddataResultSize = grunddataResults.length;
    return Promise.resolve();
  },
  progressTemplate: `{{nls "general.loading"}}`,
  template: `
    <div class="esbVanity">
      <span class="esbVanityNumber">{{this.resultSize}}</span>
      {{nls "spec.conformanceNumberInfo" count=this.resultSize}}
      {{#if this.example}}
        <p>
          {{nls
            "spec.grunddataConformanceNumberInfo"
            count=this.grunddataResultSize
          }}
          {{link context=this.example.context entry=this.example.entry namedclick='dataset'}}
        </p>
      {{/if}}
    </div>
  `,
};
