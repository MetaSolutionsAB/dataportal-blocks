/**
 * Top-level Data Vocabulary page composite (mounted via
 * `data-entryscape="datavocView"`). Lays out header + main + aside (infobox,
 * vanity), threading heading level down via `hinc`.
 *
 * Params:
 * - `hl` ('1') — base heading level; `main`/infobox get `hl+1` via `(hinc)`.
 * - `classLimit` (5) — max classes listed in `datavocMain`.
 * - `propertyLimit` (5) — max properties listed in `datavocMain`.
 * - `specUsageLimit` (5) — max spec-usage rows in `datavocMain`.
 * CSS: emits `esbAside` on the sidebar column.
 */
export default {
  extends: 'template',
  hl: '1',
  classLimit: 5,
  propertyLimit: 5,
  specUsageLimit: 5,
  template: `
      <div>{{datavocHeader hl="inherit"}}</div>
      <main>{{
        datavocMain
        hl=(hinc)
        classLimit="inherit"
        propertyLimit="inherit"
        specUsageLimit="inherit"
        }}</main>
      <aside class="esbAside">
        <div>{{datavocInfobox hl=(hinc)}}</div>
        <div>{{datavocVanity}}</div>
      </aside>
    `,
};
