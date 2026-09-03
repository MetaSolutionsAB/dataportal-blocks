// @todo: wire in shapeLookup once support lands in rdforms-specs. Here this
//  involves the following changes:
//    add `shape: 'shapeLookup'` to LOOKUP_ROUTES
//    change the param line to `const param = type === 'shape' ? 'esc_shape' : 'esc_uri';`
//    add `shapeLookup: ''` to the config's clicks

/**
 * The `clicks` route each resource type the renderer links out to is looked up
 * on. They are separate from the `class`, `property` and `terminology` routes a
 * `namedclick` resolves: the renderer knows only a referenced resource's URI,
 * never its entry, so these are reached by URI (`esc_uri`) rather than by entry.
 */
const LOOKUP_ROUTES = {
  property: 'propertyLookup',
  class: 'classLookup',
  terminology: 'terminologyLookup',
};

/**
 * Bootstraps the rdforms-specs profile renderer for an Application Profile's
 * SHACL shape, wiring its click-through URLs from the registry's merged
 * `clicks` (see `LOOKUP_ROUTES` for which). A link whose route is unfilled
 * falls back to the resource's own URI. Side effect only (a `run` block) —
 * renders no markup itself.
 *
 * Params (all passed by `loadAp`; a `run` block's declared fields are never
 * merged into `data`, so each of these must arrive from the call site):
 * - `shacl` — the AP's SHACL resource descriptor entry; its resource URI is the
 *   shape. Does nothing when unset.
 * - `tocId` / `contentId` — ids of the elements rdforms-specs renders into.
 * - `usageNote` — localized label for the `usageNote` extra shown in each
 *   field's property table.
 */
export default {
  run: function (node, data, registry) {
    if (data.shacl) {
      const clicks = registry.get('clicks');
      rdforms_specs.init(
        {
          shacl: data.shacl.getResourceURI(),
          getHREF: (uri, type) => {
            const base = clicks[LOOKUP_ROUTES[type]];
            if (!base) return uri;
            const param = 'esc_uri';
            return `${base}?${param}=${encodeURIComponent(uri)}`;
          },
          language: registry.get('locale') || registry.get('defaultLocale'),
          extras: { usageNote: data.usageNote },
        },
        data.tocId,
        data.contentId
      );
    }
  },
};
