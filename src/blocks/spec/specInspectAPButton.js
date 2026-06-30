import loadRDs from '../common/loadRDs.js';

export default {
  extends: loadRDs,
  template: `{{#if ap}}{{link namedclick="ap" class="extLinkButton inspectAPButton" content=(nls "spec.exploreAP")}}{{/if}}`,
};
