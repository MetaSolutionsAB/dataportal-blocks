import loadRDs from '../common/loadRDs.js';

export default {
  extends: loadRDs,
  template: `{{#if ap}}{{link namedclick="specDetails" class="dpButton specDetailsButton" content=(nls "spec.exploreTheSpecification")}}{{/if}}`
};
