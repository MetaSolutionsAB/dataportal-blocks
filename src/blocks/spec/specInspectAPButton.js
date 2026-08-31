import loadRDs from '../common/loadRDs.js';

/**
 * "Explore the AP" button, shown only when `loadRDs` (the base) found an
 * application-profile resource descriptor (`data.ap`) and the specification
 * itself conforms to `inspec:PROF`.
 *
 * The link mounts into this block's own node, so that node must carry no
 * class of its own and nothing may sit beside the invocation inside the
 * gates, hence the line breaks sitting inside the `{{ }}`.
 *
 * CSS: emits `esbLinkButton` and `esbInspectAPButton`.
 */
export default {
  extends: loadRDs,
  template: `{{#if ap}}{{#ifprop "dcterms:conformsTo" uri="inspec:PROF"}}{{link
      namedclick="ap"
      class="esbLinkButton esbInspectAPButton"
      content=(nls "spec.exploreAP")
    }}{{/ifprop}}{{/if}}`,
};
