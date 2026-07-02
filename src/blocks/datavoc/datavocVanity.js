/**
 * Aside "vanity" stat for the Data Vocabulary page: renders the count
 * (`resultsize`) of the spec-usage collection as a formatted number with a label.
 *
 * Params:
 * - `use` ('datavocUsageInSpec') — name of the `define`d collection whose
 *   `resultsize` is shown (set up by `datavocMain`'s usage list).
 * CSS: emits `esbVanity`, `esbVanityStatContainer`, `esbVanityNumber`.
 */
export default {
  extends: 'results',
  use: 'datavocUsageInSpec',
  template: `
    <div class="esbVanity">
      <p class="esbVanityStatContainer">
        <span class="esbVanityNumber">{{resultsize}}</span>
        <span>{{nls "datavoc.reusedNumberInfo" count=resultsize}}</span>
      </p>
    </div>
  `,
};
