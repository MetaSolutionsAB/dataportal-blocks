// This is not generalisable since nls key cannot be passed and passing resultsize via an extends is brittle.
/**
 * Vanity stat for the Terminology page: the count of specifications reusing
 * this terminology, shown as a formatted number with a label. Counts the
 * `terminologyUsageInSpec` sub-query's `resultsize` (via the `results` primitive).
 *
 * Params:
 * - `use` ('terminologyUsageInSpec') — name of the defined query to count.
 * CSS: emits `esbVanity`, `esbVanityStatContainer`, `esbVanityNumber`.
 */
export default {
  extends: 'results',
  use: 'terminologyUsageInSpec',
  template: `
    <div class="esbVanity">
      <p class="esbVanityStatContainer">
        <span class="esbVanityNumber">{{resultsize}}</span>
        <span>{{nls "conceptScheme.reusedNumberInfo" count=resultsize}}</span>
      </p>
    </div>
  `,
};
