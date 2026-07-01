import loadRDs from '../common/loadRDs.js';

/**
 * "Explore the AP" button, shown only when `loadRDs` (the base) found an
 * application-profile resource descriptor (`data.ap`). Links via the `ap` route.
 *
 * CSS: emits `esbExtLinkButton` and `esbInspectAPButton`.
 */
export default {
  extends: loadRDs,
  template: `{{#if ap}}{{link namedclick="ap" class="esbExtLinkButton esbInspectAPButton" content=(nls "spec.exploreAP")}}{{/if}}`,
};
