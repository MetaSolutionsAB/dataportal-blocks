// todo: usage note label should come from config.nls. Once the rdforms-specs
//   change that lets an extra label be a plain localized string is released
//   (branch improvement/nlsExtras), replace the literal below with:
//     const { nls } = [].concat(window.__entryscape_config).find((c) => c && c.nls);
//     usageNote: nls[document.targetLanguage].ap.usageNote

// requires the clicks configuration to define: property, class, terminology, spec, shape

/**
 * Bootstraps the rdforms-specs profile renderer for an Application Profile's
 * SHACL shape, wiring its click-through URLs from `config.clicks`. Side effect
 * only (a `run` block) — renders no markup itself.
 *
 * Params:
 * - `shacl` ('') — the AP's SHACL resource descriptor entry (passed by `loadAp`
 *   as `shacl=ap`); its resource URI is the shape. Does nothing when unset.
 */
export default {
  shacl: '',
  run: function (node, data, items, entry) {
    if (data.shacl) {
      const { clicks } = []
        .concat(window.__entryscape_config)
        .find((c) => c && c.clicks);
      rdforms_specs.init({
        shacl: data.shacl.getResourceURI(),
        getHREF: (uri, type) => {
          const base = clicks[type];
          if (!base) return undefined;
          // shape is looked up via its parent profile, the rest by URI
          const param = type === 'shape' ? 'esc_shape' : 'esc_uri';
          return `${base}?${param}=${encodeURIComponent(uri)}`;
        },
        language: document.targetLanguage,
        extras: {
          usageNote: {
            en: 'Usage note',
            sv: 'Användningsanmärkning',
          },
        },
      });
    }
  },
};
