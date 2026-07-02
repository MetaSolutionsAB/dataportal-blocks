/*
Todo:
* Shares a signature with listShowMore but is not meant to have a
* "show all" button. Instead we may want an option to just disable
* pagination (for use as a guard-rail in e.g. Infobox).
*  Blocked by BLOCKS-440
*/
/**
 * Inline list base without a "show all" affordance (cf. `listShowMore`, with
 * which it shares a signature). Renders rows as links, comma-separated inline
 * by default.
 *
 * Params (project-introduced, on top of the `list` primitive's options):
 * - `vertical` (false) — stack rows vertically instead of inline.
 * - `bodyClass` ('') — extra class appended to the list container.
 * - `rowClass` ('') — class applied to each row's link.
 * - `namedclick` ('') — click route for rows; the `rowhead` link inherits it.
 * CSS: container gets `esbInlineList` (plus `esbInlineVerticalList` when
 *   `vertical`, plus the `bodyClass` value); each row gets the `rowClass`
 *   value, and the inline comma separator is styled off `esbInlineList`.
 */
export default {
  extends: 'list',
  layout: 'raw',
  semanticHtml: true,
  vertical: false,
  namedclick: '',
  limit: 'inherit',
  bodyClass: '',
  rowClass: '',
  listbody:
    '<div class="esbInlineList{{#if vertical}} esbInlineVerticalList{{/if}}{{#if bodyClass}} {{bodyClass}}{{/if}}">{{body}}</div>',
  rowhead: `{{link namedclick="inherit" class=rowClass}}`,
};
