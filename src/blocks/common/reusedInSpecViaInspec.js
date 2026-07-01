/**
 * Lists specifications that *reuse* this resource, following the inverse
 * `inspec:reuses` relation.
 *
 * Params:
 * - `namedclick` ('spec') — click route for each row.
 * - `relationinverse` ('inspec:reuses') — inverse relation from spec to resource.
 * - `vertical` (false) — stack rows vertically instead of inline.
 * - `limit` (20) — max rows.
 * CSS: container gets `esbInlineList` (+ caller's `class`).
 */
export default {
  extends: 'list',
  layout: 'raw',
  semanticHtml: true,
  namedclick: 'spec',
  relationinverse: 'inspec:reuses',
  vertical: false,
  limit: 20,
  listhead: '',
  listbody:
    '<div class="esbInlineList{{#if class}} {{class}}{{/if}}">{{body}}</div>',
  rowhead: `{{link namedclick="inherit"}}`,
};
