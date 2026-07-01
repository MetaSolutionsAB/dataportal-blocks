// This is not generalisable since nls key cannot be passed and passing resultsize via an extends is brittle.
/**
 * Aside "vanity" stat for the Class page: renders the count (`resultsize`) of
 * the spec-usage collection as a formatted number with a label.
 *
 * Params:
 * - `use` ('classUsageInSpec') — name of the `define`d collection whose
 *   `resultsize` is shown (set up by `classMain`'s usage list).
 * CSS: emits `esbVanity`, `esbVanityStatContainer`, `esbVanityNumber`.
 */
export default {
  extends: 'results',
  use: 'classUsageInSpec',
  template: `
    <div class="esbVanity">
      <p class="esbVanityStatContainer">
        <span class="esbVanityNumber">{{resultsize}}</span>
        <span>{{nls "class.reusedNumberInfo" count=resultsize}}</span>
      </p>
    </div>
  `,
};
