import { listEntries } from '../scripts/listEntries.js';

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
 * - `rowClass` ('') — class applied to each row's link.
 * - `namedclick` ('') — click route for rows; the `rowhead` link inherits it.
 * - `defineCount` ('') — registry key to publish `{resultsize, shown, truncated}` under,
 *   for a `*Header` block to render the true total and for `overflowNote` / `showAllLink`
 *   to account for the rows held back. Replaces the `list` primitive's `define`, which
 *   would report the truncated count instead.
 * CSS: the list's container gets `esbInlineList`, plus `esbInlineVerticalList`
 *   when `vertical`; each row gets the `rowClass` value, and the inline comma
 *   separator is styled off `esbInlineList`. A classed container around the
 *   list and whatever sits beside it belongs to the caller.
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
  rowClass: '',
  listbody:
    '<div class="esbInlineList{{#if vertical}} esbInlineVerticalList{{/if}}">{{body}}</div>',
  rowhead: `{{link namedclick="inherit" class=rowClass}}`,
};
