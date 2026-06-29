// This is not generalisable since nls key cannot be passed and passing resultsize via an extends is brittle.
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
