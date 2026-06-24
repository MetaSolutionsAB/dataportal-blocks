import loadRDs from '../common/loadRDs.js';

export default {
  extends: loadRDs,
  template: `{{#if ap}}{{link namedclick="specDetails" class="extLinkButton inspectAPButton" content=(nls "spec.exploreAP")}}{{/if}}`
};
