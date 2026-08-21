/**
 * Renders one SKOS mapping relation as a labelled heading plus an inline list
 * of the matching concepts; outputs nothing when the relation is absent. Used
 * per-relation by `conceptsInOtherTerminology`.
 *
 * Params:
 * - `relationProperty` ('') — the SKOS relation to render (e.g. `skos:exactMatch`).
 * - `label` ('') — NLS-prefixed heading label for the relation.
 * - `defineCount` ('') — registry key for this relation's row count, so the
 *   overflow note can read it. Each relation needs its own.
 * - `hl` ('3') — heading level.
 * - `limit` ('inherit') — row limit passed to the inline list.
 * CSS: emits `esbMatchingConceptsContainer` around the list and its overflow
 *   note.
 */
export default {
  extends: 'template',
  hl: '3',
  label: '',
  relationProperty: '',
  defineCount: '',
  limit: 'inherit',
  template: `
    {{#ifprop relationProperty}}
      <div>
        <h{{hl}}>{{label}}</h{{hl}}>
        <div class="esbMatchingConceptsContainer">
          <div>{{matchingConceptsList
            relation=relationProperty
            defineCount="inherit"
            limit="inherit"
          }}</div>
          {{overflowNote useCount=defineCount labelKey="concept.conceptOverflow"}}
        </div>
      </div>
    {{/ifprop}}`,
};
