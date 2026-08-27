/**
 * Renders the `<dl>` row naming the resource's own URI: the `<dt>`, then a `<dd>`
 * holding the URI as an external link.
 *
 * Every `*Infobox` opens with this row, differing only in the `<dt>` wording.
 * Must be written as the sole child of a `<div>` in the `<dl>`, with no
 * surrounding whitespace — `<div>{{resourceUriRow …}}</div>`, the same rule as
 * `predicateRefList` (see the `<dl>` shape in `src/README.md`).
 *
 * Params:
 * - `dtContent` ('') — NLS-prefixed text for the `<dt>`. Every caller has to pass one.
 * CSS: emits `esbResourceUri` on the `<dd>` and `esbExtLink` on the `<a>`.
 */
export default {
  extends: 'template',
  dtContent: '',
  template: `
    <dt>{{dtContent}}</dt>
    <dd class="esbResourceUri"><a
      class="esbExtLink"
      href="{{resourceURI}}"
      target="_blank"
      rel="noopener noreferrer">{{resourceURI}}</a></dd>
  `,
};
