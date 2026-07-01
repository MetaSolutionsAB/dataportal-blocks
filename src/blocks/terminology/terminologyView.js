/**
 * Top-level Terminology page composite (mounted via
 * `data-entryscape="terminologyView"`). Lays out header + main + aside
 * (infobox, vanity), threading heading level down via `hinc`.
 *
 * Params:
 * - `hl` ('1') — base heading level; main/infobox get `hl+1` via `(hinc)`.
 * - `conceptLimit` (5) — max concepts listed in `terminologyMain`.
 * - `specUsageLimit` (5) — max spec-usage rows in `terminologyMain`.
 * CSS: emits `esbAside` on the sidebar column.
 */
export default {
  extends: 'template',
  hl: '1',
  conceptLimit: 5,
  specUsageLimit: 5,
  template: `
      <div>{{terminologyHeader hl="inherit"}}</div>
      <main>{{
        terminologyMain
        hl=(hinc)
        conceptLimit="inherit"
        specUsageLimit="inherit"
        }}</main>
      <aside class="esbAside">
        <div>{{terminologyInfobox hl=(hinc)}}</div>
        <div>{{terminologyVanity}}</div>
      </aside>
    `,
};
