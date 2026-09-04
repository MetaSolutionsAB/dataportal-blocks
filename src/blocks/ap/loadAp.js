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
 * - `marginFlag` (false) — whether the renderer shows its "Metadata
 *   specification" corner flag. Forwarded to `initSpec`.
 * - `tocControls` (true) — whether the renderer adds its own ToC hide/jump
 *   controls. Forwarded to `initSpec`, which absorbs upstream's spelling.
 *
 * Provides: inherits `ap`, `diagram`, `diagramURI` on `data` from `loadRDs`.
 */
export default {
  extends: loadRDs,
  tocId: 'rdforms-specs-toc',
  contentId: 'rdforms-specs-content',
  marginFlag: false,
  tocControls: true,
  template: `{{initSpec
    shacl=ap
    tocId=tocId
    contentId=contentId
    usageNote=(nls "ap.usageNote")
    marginFlag=marginFlag
    tocControls=tocControls
  }}`,
};
