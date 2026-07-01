/**
 * Top-level Class page composite (mounted via `data-entryscape="classView"`).
 * Lays out header + main + aside (infobox, vanity), threading heading level via
 * `hinc`.
 *
 * Params:
 * - `hl` ('1') — base heading level; `main`/infobox get `hl+1` via `(hinc)`.
 * - `specUsageLimit` (5) — max spec-usage rows in `classMain`.
 * CSS: emits `esbAside` on the sidebar column.
 */
export default {
  extends: 'template',
  hl: '1',
  specUsageLimit: 5,
  template: `
      <div>{{classHeader hl="inherit"}}</div>
      <main>{{
        classMain
        hl=(hinc)
        specUsageLimit="inherit"
        }}</main>
      <aside class="esbAside">
        <div>{{classInfobox hl=(hinc)}}</div>
        <div>{{classVanity}}</div>
      </aside>
    `,
};
