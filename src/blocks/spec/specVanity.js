import { resolveEntry } from '../common/scripts/resolveEntry.js';
import { isGrunddata } from '../common/scripts/isGrunddata.js';

/**
 * Sidebar "vanity" panel for a Specification: shows how many datasets, data
 * services and dataset series conform to the spec, (when present) links one
 * example "nationell grunddatamängd", and, when anything conforms, a button to
 * the dataset search filtered on this spec through the `conformantDatasetSearch`
 * click route.
 *
 * A dataset with `dcat:inSeries` is left out of the count, so a series counts
 * once rather than once per member. This also drops members whose series does
 * not itself conform to the spec.
 *
 * Provides on `data`:
 * - `resultsize` — count of `dcat:Dataset`, `dcat:DataService` and
 *   `dcat:DatasetSeries` entries conforming to this spec, excluding series
 *   members.
 * - `grunddataResultsize` — subset count whose `dcterms:subject` is grunddata.
 * - `example` — `{context, entry, uri, ruri, click}` of the first grunddata
 *   entry (unset when there is none). `click` is the route its link follows,
 *   by type: `dataservice`, `datasetSeries`, otherwise `dataset`.
 * CSS: emits `esbVanity`, `esbVanityStatContainer`, `esbVanityNumber`; the
 * search button is styled as `showAllLink`'s.
 */
export default {
  extends: 'template',
  before: async function (node, data, registry) {
    const { es, entry } = resolveEntry(registry, data);
    let resultSize = 0;
    let grunddataResults = [];
    await es
      .newSolrQuery()
      .rdfType(['dcat:Dataset', 'dcat:DataService', 'dcat:DatasetSeries'])
      .uriProperty('dcterms:conformsTo', entry.getResourceURI())
      .uriProperty('dcat:inSeries', '*', 'not')
      .forEach((conformantEntry) => {
        resultSize += 1;
        if (isGrunddata(conformantEntry))
          grunddataResults.push(conformantEntry);
      });

    const clickFor = (e) => {
      const md = e.getAllMetadata();
      const isA = (type) =>
        md.find(e.getResourceURI(), 'rdf:type', type).length;
      if (isA('dcat:DataService')) return 'dataservice';
      if (isA('dcat:DatasetSeries')) return 'datasetSeries';
      return 'dataset';
    };

    let example;
    if (grunddataResults.length > 0) {
      const exampleEntry = grunddataResults[0];
      example = {
        context: exampleEntry.getContext().getId(),
        entry: exampleEntry.getId(),
        uri: exampleEntry.getURI(),
        ruri: exampleEntry.getResourceURI(),
        click: clickFor(exampleEntry),
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
          {{link context=this.example.context entry=this.example.entry namedclick=this.example.click}}
        </p>
      {{/if}}
      {{#if this.resultsize}}{{showAllLink
        namedclick="conformantDatasetSearch"
        labelKey="spec.allConformantDatasets"
      }}{{/if}}
    </div>
  `,
};
