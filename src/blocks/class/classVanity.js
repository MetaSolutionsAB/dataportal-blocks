// todo: content should be semantically connected to the number, not just a text following it
// The layout should be generalisable, but passing resultsize via an extends is brittle.
export default {
  extends: 'results',
  use: 'classUsageInSpec',
  template: `
    <div class="esbVanity">
      <span class="esbVanityNumber">{{resultsize}}</span>
      {{nls "class.reusedNumberInfo" count=resultsize}}
    </div>
  `,
};
