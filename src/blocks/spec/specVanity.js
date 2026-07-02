// todo: add button going to datset search with filter conformsTo=this_spec

import { resolveEntry } from '../common/scripts/resolveEntry.js';
import { isGrunddata } from '../common/scripts/isGrunddata.js';

/**
 * Sidebar "vanity" panel for a Specification: shows how many datasets conform
 * to the spec, and (when present) links one example "nationell grunddatamängd"
 * dataset.
 *
 * Provides on `data`:
 * - `resultsize` — count of `dcat:Dataset` entries conforming to this spec.
 * - `grunddataResultsize` — subset count whose `dcterms:subject` is grunddata.
 * - `example` — `{context, entry, uri, ruri}` of the first grunddata dataset
 *   (unset when there is none).
 * CSS: emits `esbVanity`, `esbVanityStatContainer`, `esbVanityNumber`.
 */
export default {
  extends: 'template',
  before: async function (node, data, registry) {
    const { es, entry } = resolveEntry(registry, data);
    let resultSize = 0;
    let grunddataResults = [];
    await es
      .newSolrQuery()
      .rdfType('dcat:Dataset')
      .uriProperty('dcterms:conformsTo', entry.getResourceURI())
      .forEach((conformantEntry) => {
        resultSize += 1;
        if (isGrunddata(conformantEntry))
          grunddataResults.push(conformantEntry);
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
