/**
 * Top-level Property page composite (mounted via
 * `data-entryscape="propertyView"`). Lays out header + main + aside (infobox,
 * vanity), threading heading level via `hinc`.
 *
 * Params:
 * - `hl` ('1') — base heading level; `main`/infobox get `hl+1` via `(hinc)`.
 * - `specUsageLimit` (5) — max spec-usage rows in `propertyMain`.
 * CSS: emits `esbAside` on the sidebar column.
 */
export default {
  extends: 'template',
  hl: '1',
  specUsageLimit: 5,
  template: `
      <div>{{propertyHeader hl="inherit"}}</div>
      <main>{{
        propertyMain
        hl=(hinc)
        specUsageLimit="inherit"
        }}</main>
      <aside class="esbAside">
        <div>{{propertyInfobox hl=(hinc)}}</div>
        <div>{{propertyVanity}}</div>
      </aside>
    `,
};
