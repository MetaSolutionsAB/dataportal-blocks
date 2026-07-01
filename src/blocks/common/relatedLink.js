/**
 * Renders a link whose label is resolved from the related entity (via
 * `relation`) rather than the current entry.
 *
 * Params:
 * - `relation` ('adms:last') — relation to the entity supplying the link label.
 * - `namedClick` ('') — click route (note the capital C; mapped to the
 *   helper's `namedclick`).
 * - `class` (undefined) — optional class for the wrapping `<span>`; when
 *   unset the `<span>` renders with no `class` attribute.
 */
export default {
  extends: 'template',
  relation: 'adms:last',
  namedClick: '',
  class: undefined,
  template:
    '<span {{#if class}}class="{{class}}"{{/if}}>{{link namedclick=namedClick}}</span>',
};
