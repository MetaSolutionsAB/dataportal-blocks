// todo: add button going to datset search with filter conformsTo=this_spec

/*
 * The before script identifies any dcat:Dataset which dcterms:conformsTo
 * the given specification. It then identifies the subset of these which
 * are 'nationell grunddatamängd'.
 */
import { resolveEntry } from '../common/scripts/resolveEntry.js';

export default {
  extends: 'template',
  before: async function (node, data, registry) {
    const grunddataPrefix = 'https://dataportal.se/concepts/grunddata/';
    const { es, entry } = resolveEntry(registry, data);
    let resultSize = 0;
    let grunddataResults = [];
    await es
      .newSolrQuery()
      .rdfType('dcat:Dataset')
      .uriProperty('dcterms:conformsTo', entry.getResourceURI())
      .forEach((conformantEntry) => {
        resultSize += 1;
        const isGrunddata =
          conformantEntry
            .getAllMetadata()
            .find(conformantEntry.getResourceURI(), 'dcterms:subject')
            .filter((stmt) => stmt.getValue().startsWith(grunddataPrefix))
            .length > 0;
        if (isGrunddata) grunddataResults.push(conformantEntry);
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

    data.resultsize = resultSize;
    data.example = example;
    data.grunddataResultsize = grunddataResults.length;
    return Promise.resolve();
  },
  progressTemplate: `{{nls "general.loading"}}`,
  template: `
    <div class="esbVanity">
      <p class="esbVanityStatContainer">
        <span class="esbVanityNumber">{{this.resultsize}}</span>
        <span>{{nls "spec.conformanceNumberInfo" count=this.resultsize}}</span>
      </p>
      {{#if this.example}}
        <p>
          {{nls
            "spec.grunddataConformanceNumberInfo"
            count=this.grunddataResultsize
          }}
          {{link context=this.example.context entry=this.example.entry namedclick="dataset"}}
        </p>
      {{/if}}
    </div>
  `,
};
