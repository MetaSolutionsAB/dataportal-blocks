import loadRDs from '../common/loadRDs.js';

/**
 * Loads the AP's resource descriptors (via `loadRDs`) and hands the discovered
 * application profile to `initSpec` to bootstrap the rdforms-specs renderer.
 * Renders no markup of its own.
 *
 * Params:
 * - `tocId` ('rdforms-specs-toc') — id of the element rdforms-specs fills with
 *   the table of contents. Its contents are replaced and its id forced to
 *   `toc`, which is what the renderer's own stylesheet and TOC controls expect.
 * - `contentId` ('rdforms-specs-content') — id of the element rdforms-specs
 *   fills with the specification. Its contents are replaced.
 *
 * Provides: inherits `ap`, `diagram`, `diagramURI` on `data` from `loadRDs`.
 */
export default {
  extends: loadRDs,
  tocId: 'rdforms-specs-toc',
  contentId: 'rdforms-specs-content',
  template: `{{initSpec
    shacl=ap
    tocId=tocId
    contentId=contentId
    usageNote=(nls "ap.usageNote")
  }}`,
};
