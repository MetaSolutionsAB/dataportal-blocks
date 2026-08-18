/**
 * Top-level Specification page composite (mounted via
 * `data-entryscape="specView"`). Lays out header + main + aside (vanity,
 * infobox), threading heading level down via `hinc`.
 *
 * Params:
 * - `hl` ('1') — base heading level; `main`/infobox get `hl+1` via `(hinc)`.
 * - `introducedLimit` (5) — max introduced classes/properties in `specMain`.
 * - `reusedLimit` (3) — max reused classes/properties in `specMain`.
 * - `badgeForNonInspec` (false) — whether to show a badge for non-INSPEC specifications in the header.
 * - `keywordLimit` (5) — max keywords in `specInfobox`.
 * CSS: emits `esbAside` on the sidebar column.
 */
export default {
  extends: 'template',
  hl: '1',
  introducedLimit: 5,
  reusedLimit: 3,
  badgeForNonInspec: false,
  keywordLimit: 5,
  template: `
    <div>{{
      specHeader
      hl="inherit"
      badgeForNonInspec="inherit"
      }}</div>
    <main>{{
      specMain
      hl=(hinc)
      introducedLimit="inherit"
      reusedLimit="inherit"
      }}</main>
    <aside class="esbAside">
      <div>{{specVanity}}</div>
      <div>{{specInfobox hl=(hinc) keywordLimit="inherit"}}</div>
    </aside>
  `,
};
