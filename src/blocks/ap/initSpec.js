/**
 * Bootstraps the rdforms-specs profile renderer for an Application Profile's
 * SHACL shape, wiring its click-through URLs from the registry's merged
 * `clicks` (of which it uses the `property`, `class` and `terminology`
 * targets). Side effect only (a `run` block) — renders no markup itself.
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
            const base = clicks[type];
            if (!base) return undefined;
            // shape is looked up via its parent profile, the rest by URI
            const param = type === 'shape' ? 'esc_shape' : 'esc_uri';
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
