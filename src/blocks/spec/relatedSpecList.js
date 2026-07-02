import listStandard from '../common/layout/listStandard.js';

/**
 * Vertical list of related specifications (e.g. `prof:isProfileOf` parents),
 * caller passes the `relation`. Each row links via the `spec` route.
 *
 * Params (on top of `listStandard`):
 * - `namedclick` ('spec'), `vertical` (true), `rowClass` ('esbSpecLink').
 * - `limit` ('25') — a safety cap only; related specs are not expected to be
 *   numerous.
 * CSS: emits `esbSpecLink` on rows, plus `esbInlineList` /
 *   `esbInlineVerticalList` from the base.
 */
export default {
  extends: listStandard,
  namedclick: 'spec',
  vertical: true,
  limit: '25',
  rowClass: 'esbSpecLink',
};
