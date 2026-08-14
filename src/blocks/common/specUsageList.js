/**
 * Abstract presentation base for the "used in specifications" lists: an inline
 * list of spec links. Extended by `usedInSpecViaRD` and `reusedInSpecViaInspec`,
 * which supply the relation and row link. Not invoked directly.
 *
 * Params:
 * - `namedclick` ('spec') — click route for each row.
 * - `vertical` (false) — stack rows vertically instead of inline.
 * - `limit` ('inherit') — max rows, inherited from the caller.
 * CSS: container gets `esbInlineList esbSpecUsageContainer` (plus
 *   `esbInlineVerticalList` when `vertical`, plus the caller's `class`).
 */
export default {
  extends: 'list',
  layout: 'raw',
  semanticHtml: true,
  namedclick: 'spec',
  vertical: false,
  limit: 'inherit',
  listhead: '',
  listbody:
    '<div class="esbInlineList{{#if vertical}} esbInlineVerticalList{{/if}} esbSpecUsageContainer{{#if class}} {{class}}{{/if}}">{{body}}</div>',
};
