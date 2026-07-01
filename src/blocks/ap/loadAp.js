import loadRDs from '../common/loadRDs.js';

/**
 * Loads the AP's resource descriptors (via `loadRDs`) and hands the discovered
 * application profile to `initSpec` to bootstrap the rdforms-specs renderer.
 * Renders no markup of its own.
 *
 * Provides: inherits `ap`, `diagram`, `diagramURI` on `data` from `loadRDs`.
 */
export default {
  extends: loadRDs,
  template: `{{initSpec shacl=ap}}`,
};
