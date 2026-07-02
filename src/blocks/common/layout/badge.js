/**
 * Renders a small inline badge.
 *
 * Params:
 * - `content` ('') — the label text (caller passes it, e.g.
 *   `{{badge content=typeContent}}`).
 * - `class` ('') — modifier class used instead of the default `esbTypeBadge`
 *   (e.g. `esbGrunddataMarker`).
 * CSS: emits `esbBadge` plus a modifier — `esbTypeBadge` by default, or the
 *   `class` passed by the caller.
 */
export default {
  extends: 'template',
  class: '',
  template: `<span class="esbBadge {{#if class}}{{class}}{{else}}esbTypeBadge{{/if}}">{{content}}</span>`,
};
