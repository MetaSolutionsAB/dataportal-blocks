import { resolveEntry } from '../common/scripts/resolveEntry.js';
import {
  loadRelationTargets,
  targetsOfType,
} from '../common/scripts/relationTargets.js';

/**
 * The classes-and-properties region of the Specification page: a section per
 * relation and type, each rendered only if it has anything in it.
 *
 * A relation cannot say whether it points at classes or at properties — that is
 * a fact about each target, so they have to be loaded before the sections can
 * be laid out. Gating on the count each list publishes is not an option:
 * a list publishes as it renders, so a gate awaiting that key would suppress
 * the very thing that sets it and wait forever.
 *
 * The caller still gates the region on the relations existing at all, a
 * metadata read that keeps a spec with neither from loading anything.
 * The count of a relation whose targets all fail to resolve is zero, so every
 * section is hidden while the caller's heading remains.
 *
 * Params:
 * - `hl` ('2') — heading level for the region heading; sections use `(hinc)`.
 * - `introducedLimit` (15) / `reusedLimit` (15) — row cap per section.
 * Provides on `data`: `introducedClasses`, `introducedProperties`,
 *   `reusedClasses`, `reusedProperties` — how many targets of that type the
 *   relation has, which is what each section is gated on.
 * CSS: emits `esbCPInSpecContainer` around each list and its overflow note;
 *   section summaries use `esbSummaryWithHeading` and `esbHeadingInSummary`.
 */
export default {
  extends: 'template',
  hl: '2',
  introducedLimit: 15,
  reusedLimit: 15,
  progressTemplate: ' ',
  before: async function (node, data, registry) {
    const { entry } = resolveEntry(registry, data);
    const [introduced, reused] = await Promise.all([
      loadRelationTargets(registry, entry, 'inspec:introduces'),
      loadRelationTargets(registry, entry, 'inspec:reuses'),
    ]);
    data.introducedClasses = targetsOfType(introduced, 'rdfs:Class').length;
    data.introducedProperties = targetsOfType(
      introduced,
      'rdf:Property'
    ).length;
    data.reusedClasses = targetsOfType(reused, 'rdfs:Class').length;
    data.reusedProperties = targetsOfType(reused, 'rdf:Property').length;
  },
  template: `
    <h{{hl}}>{{nls "spec.classesAndProperties"}}</h{{hl}}>
    {{#if introducedClasses}}
      <details open>
        <summary class="esbSummaryWithHeading">
          <h{{hinc}} class="esbHeadingInSummary">{{classIntroducedInSpecHeader}}</h{{hinc}}>
        </summary>
        <div class="esbCPInSpecContainer">
          <div>{{classIntroducedInSpecList limit=introducedLimit}}</div>
          {{overflowNote useCount="classesIntroducedInSpec" labelKey="spec.classOverflow"}}
        </div>
      </details>
    {{/if}}
    {{#if introducedProperties}}
      <details open>
        <summary class="esbSummaryWithHeading">
          <h{{hinc}} class="esbHeadingInSummary">{{propertyIntroducedInSpecHeader}}</h{{hinc}}>
        </summary>
        <div class="esbCPInSpecContainer">
          <div>{{propertyIntroducedInSpecList limit=introducedLimit}}</div>
          {{overflowNote useCount="propertiesIntroducedInSpec" labelKey="spec.propertyOverflow"}}
        </div>
      </details>
    {{/if}}
    {{#if reusedClasses}}
      <details open>
        <summary class="esbSummaryWithHeading">
          <h{{hinc}} class="esbHeadingInSummary">{{classReusedInSpecHeader}}</h{{hinc}}>
        </summary>
        <div class="esbCPInSpecContainer">
          <div>{{classReusedInSpecList limit=reusedLimit}}</div>
          {{overflowNote useCount="classesReusedInSpec" labelKey="spec.classOverflow"}}
        </div>
      </details>
    {{/if}}
    {{#if reusedProperties}}
      <details open>
        <summary class="esbSummaryWithHeading">
          <h{{hinc}} class="esbHeadingInSummary">{{propertyReusedInSpecHeader}}</h{{hinc}}>
        </summary>
        <div class="esbCPInSpecContainer">
          <div>{{propertyReusedInSpecList limit=reusedLimit}}</div>
          {{overflowNote useCount="propertiesReusedInSpec" labelKey="spec.propertyOverflow"}}
        </div>
      </details>
    {{/if}}
  `,
};
