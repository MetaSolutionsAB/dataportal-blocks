/**
 * Renders one SKOS mapping relation as a labelled heading plus an inline list
 * of the matching concepts. Used per-relation by `conceptsInOtherTerminology`,
 * which gates each invocation on the relation being present — this block
 * assumes it is, and renders a heading either way.
 *
 * Params:
 * - `relationProperty` ('') — the SKOS relation to render (e.g. `skos:exactMatch`).
 * - `label` ('') — NLS-prefixed heading label for the relation.
 * - `defineCount` ('') — registry key for this relation's row count, so the
 *   overflow note can read it. Each relation needs its own.
 * - `hl` ('3') — heading level.
 * - `limit` ('inherit') — row limit passed to the inline list.
 * CSS: emits `esbMatchingConceptsContainer` around the list and its overflow
 *   note. The element these sit in belongs to the caller, which is why the
 *   heading and the container are siblings rather than sharing a wrapper.
 */
export default {
  extends: 'template',
  hl: '3',
  label: '',
  relationProperty: '',
  defineCount: '',
  limit: 'inherit',
  template: `
    <h{{hl}}>{{label}}</h{{hl}}>
    <div class="esbMatchingConceptsContainer">
      <div>{{matchingConceptsList
        relation=relationProperty
        defineCount="inherit"
        limit="inherit"
      }}</div>
      {{overflowNote useCount=defineCount labelKey="concept.conceptOverflow"}}
    </div>`,
};
