import { listCount } from '../scripts/listCount.js';

/**
 * A note saying how many rows a truncated list held back.
 *
 * For a list we do not expect to overflow and that has no search page to send a
 * reader to, so that a truncation is at least admitted rather than silent.
 * Renders nothing when the list showed everything.
 *
 * Params:
 * - `useCount` ('') — the list's `defineCount` key. Not `use`, which the
 *   runtime reserves for sharing an entry between blocks.
 * - `labelKey` ('') — the NLS key for the message, **without** the `esb_nls:`
 *   prefix: `{{nls}}` adds that itself, and a prefixed value would be resolved
 *   to a sentence before the template ran, then looked up as a key. The key's
 *   string takes the held-back count as `${count}`, which lets one key
 *   serve several lists.
 * - `noteClass` ('esbOverflowNote') — class on the note. Not `class`, which the
 *   runtime stamps on the block's own node whether or not the template renders
 *   anything, leaving an empty classed element on every list that fitted.
 * CSS: emits `esbOverflowNote` by default, on a `span`.
 */
export default {
  extends: 'template',
  useCount: '',
  labelKey: '',
  noteClass: 'esbOverflowNote',
  progressTemplate: ' ',
  before: async function (node, data, registry) {
    data.overflow = (await listCount(registry, data)).overflow;
  },
  // 0 is falsy, so this is also the "nothing was held back" gate, and the class
  // sits inside it so that it goes away with the sentence.
  template: `{{#if overflow}}<span class="{{noteClass}}">{{nls labelKey count=overflow}}</span>{{/if}}`,
};
