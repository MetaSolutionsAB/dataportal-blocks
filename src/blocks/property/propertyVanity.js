// This is not generalisable since nls key cannot be passed and passing resultsize via an extends is brittle.
/**
 * Aside "vanity" stat for the Property page: renders the count (`resultsize`) of
 * the spec-usage collection as a formatted number with a label.
 *
 * Params:
 * - `use` ('propertyUsageInSpec') — name of the `define`d collection whose
 *   `resultsize` is shown (set up by `propertyMain`'s usage list).
 * CSS: emits `esbVanity`, `esbVanityStatContainer`, `esbVanityNumber`.
 */
export default {
  extends: 'results',
  use: 'propertyUsageInSpec',
  template: `
    <div class="esbVanity">
      <p class="esbVanityStatContainer">
        <span class="esbVanityNumber">{{resultsize}}</span>
        <span>{{nls "property.reusedNumberInfo" count=resultsize}}</span>
      </p>
    </div>
  `,
};
