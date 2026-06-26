// todo: content should be semantically connected to the number, not just a text following it
// The layout should be generalisable, but passing resultsize via an extends is brittle.
export default {
  extends: 'results',
  use: 'datavocUsageInSpec',
  template: `
    <div class="esbVanity">
      <span class="esbVanityNumber">{{resultsize}}</span>
      {{nls "datavoc.reusedNumberInfo" count=resultsize}}
    </div>
  `,
};
