/**
 * Renders a small inline type badge.
 *
 * Params:
 * - `content` ('') — the label text (caller passes it, e.g.
 *   `{{typeMarker content=typeContent}}`).
 * CSS: emits `styleMarker`.
 */
export default {
  extends: 'template',
  content: '',
  template: `<span class="styleMarker">{{content}}</span>`,
};
