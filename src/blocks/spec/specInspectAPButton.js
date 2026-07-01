import loadRDs from '../common/loadRDs.js';

/**
 * "Explore the AP" button, shown only when `loadRDs` (the base) found an
 * application-profile resource descriptor (`data.ap`). Links via the `ap` route.
 *
 * CSS: emits `extLinkButton` and `inspectAPButton`.
 */
export default {
  extends: loadRDs,
  template: `{{#if ap}}{{link namedclick="ap" class="extLinkButton inspectAPButton" content=(nls "spec.exploreAP")}}{{/if}}`,
};
