import { listCount } from '../scripts/listCount.js';

/**
 * A link from a truncated list to the search page for the same kind of
 * resource, filtered on the resource the page is about.
 *
 * The href is left entirely to the `namedclick` route, so the host decides how
 * the filter is encoded. A route prefixed `esb:` is expanded as a template over
 * the page entry, which is what makes the filter possible:
 * `'esb:/begrepp?f=${uri}'` becomes that terminology's URI. The caller places
 * this after the list; nothing about it depends on the list's own markup.
 *
 * Params:
 * - `namedclick` ('') — the click route to follow, e.g. `conceptSearch`.
 * - `labelKey` ('') — NLS key for the link text, e.g.
 *   `datavoc.showAllClasses`. Bare, without the `esb_nls:` prefix.
 * - `always` (true) — show the link without asking the list what it found. On
 *   by default, and worth keeping on wherever the list cannot be empty: with it
 *   on the block never reads the registry, so `useCount` is not needed and
 *   nothing can stall.
 * - `onlyWhenTruncated` (false) — with `always` off, chooses between the two
 *   count-based conditions: on, the link appears only when the list held rows
 *   back; off, whenever the list found anything at all. Meaningless while
 *   `always` is on, which simply wins.
 * - `useCount` ('') — the list's `defineCount` key; required whenever `always`
 *   is false. Not `use`, which the runtime reserves for sharing an entry.
 * - `linkClass` ('esbLinkButton esbShowAllLink') — classes on the anchor. Not
 *   `class`, which the runtime would also stamp on this block's own node and so
 *   emit twice.
 * CSS: emits `esbLinkButton` and `esbShowAllLink` by default.
 */
export default {
  extends: 'template',
  namedclick: '',
  labelKey: '',
  always: true,
  onlyWhenTruncated: false,
  useCount: '',
  linkClass: 'esbLinkButton esbShowAllLink',
  progressTemplate: ' ',
  before: async function (node, data, registry) {
    if (data.always) {
      data.show = true;
      return;
    }
    const counts = await listCount(registry, data);
    data.show = data.onlyWhenTruncated
      ? counts.truncated
      : counts.resultsize > 0;
  },
  // Shaped after specInspectAPButton: the link mounts into this block's own
  // node, so that node must carry no class of its own for `link` to copy onto
  // the anchor, and nothing may sit beside the invocation inside the `{{#if}}`.
  template: `{{#if show}}{{link namedclick=namedclick class=linkClass content=(nls labelKey)}}{{/if}}`,
};
