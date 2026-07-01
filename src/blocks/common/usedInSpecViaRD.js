/**
 * Lists specifications that *use* this resource via its Resource Descriptors,
 * following the inverse `dcterms:subject` relation; each row links through
 * `RDtoSpec`. Base for `reusedInSpecViaRD`.
 *
 * Params:
 * - `namedclick` ('spec') — click route for each row.
 * - `relationinverse` ('dcterms:subject') — inverse relation from RD to resource.
 * - `constraints` (null) — no inheritance filter (subclasses add one).
 * - `vertical` (false) — stack rows vertically instead of inline.
 * - `limit` ('inherit') — max rows, inherited from the caller.
 * CSS: container gets `esbInlineList` (+ caller's `class`).
 */
export default {
  extends: 'list',
  layout: 'raw',
  semanticHtml: true,
  namedclick: 'spec',
  relationinverse: 'dcterms:subject',
  constraints: null,
  vertical: false,
  limit: 'inherit',
  listhead: '',
  listbody:
    '<div class="esbInlineList{{#if class}} {{class}}{{/if}}">{{body}}</div>',
  rowhead: `{{RDtoSpec namedclick="inherit"}}`,
};
