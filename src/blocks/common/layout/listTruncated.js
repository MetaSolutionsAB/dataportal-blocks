import { listEntries } from '../scripts/listEntries.js';

/*
Todo:
* offer a "show all" button for a truncated list, linking to the search page
* filtered on this resource. Waiting on a search route in config.clicks and a
* convention for encoding the filter in its URL; `truncated` is already published
* under `defineCount` for it to gate on.
*/
/**
 * Inline list base (extended by the inline `*List` blocks). Renders rows as links,
 * comma-separated inline by default, and truncates at `limit` rather than paginating.
 *
 * Rows come from `common/scripts/listEntries.js`, which caps them at `limit` — a list
 * given no more rows than fit on a page renders no pagination. The price is that the
 * list's own `resultsize` counts the capped rows, so the true total is published
 * separately under `defineCount`; see that script for the arrangement.
 *
 * Params (project-introduced, on top of the `list` primitive's options):
 * - `vertical` (false) — stack rows vertically instead of inline.
 * - `bodyClass` ('') — extra class appended to the list container.
 * - `rowClass` ('') — class applied to each row's link.
 * - `namedclick` ('') — click route for rows; the `rowhead` link inherits it.
 * - `defineCount` ('') — registry key to publish `{resultsize, shown, truncated}` under,
 *   for a `*Header` block to render. Replaces the `list` primitive's `define`, which
 *   would report the truncated count instead.
 * CSS: container gets `esbInlineList` (plus `esbInlineVerticalList` when `vertical`,
 *   plus the `bodyClass` value); each row gets the `rowClass` value, and the inline
 *   comma separator is styled off `esbInlineList`.
 */
export default {
  extends: 'list',
  layout: 'raw',
  semanticHtml: true,
  entries: listEntries,
  defineCount: '',
  vertical: false,
  namedclick: '',
  limit: 'inherit',
  bodyClass: '',
  rowClass: '',
  listbody:
    '<div class="esbInlineList{{#if vertical}} esbInlineVerticalList{{/if}}{{#if bodyClass}} {{bodyClass}}{{/if}}">{{body}}</div>',
  rowhead: `{{link namedclick="inherit" class=rowClass}}`,
};
