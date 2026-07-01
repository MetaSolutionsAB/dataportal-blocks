/**
 * Top-level Concept page composite (mounted via
 * `data-entryscape="conceptView"`). Lays out header + main + aside (infobox);
 * unlike the other views it has no vanity. Threads heading level via `hinc`.
 *
 * Params:
 * - `hl` ('1') — base heading level; main/infobox get `hl+1` via `(hinc)`.
 * - `broaderConceptLimit` / `narrowerConceptLimit` / `relatedConceptLimit` /
 *   `matchingConceptLimit` (5 each) — row limits passed to `conceptMain`.
 * CSS: emits `esbAside` on the sidebar column.
 */
export default {
  extends: 'template',
  hl: '1',
  broaderConceptLimit: 5,
  narrowerConceptLimit: 5,
  relatedConceptLimit: 5,
  matchingConceptLimit: 5,
  template: `
      <div>{{conceptHeader hl="inherit"}}</div>
      <main>{{
        conceptMain
        hl=(hinc)
        broaderConceptLimit="inherit"
        narrowerConceptLimit="inherit"
        relatedConceptLimit="inherit"
        matchingConceptLimit="inherit"
        }}</main>
      <aside class="esbAside">
        <div>{{conceptInfobox hl=(hinc)}}</div>
      </aside>
    `,
};
