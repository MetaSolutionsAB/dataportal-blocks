import predicateRefList from './predicateRefList.js';

/**
 * `predicateRefList` for a predicate whose values are external references by
 * definition — `rdfs:seeAlso`, which mixes URIs and literals. Values are never
 * looked up as local entries, so they never become portal links; http(s) URIs
 * render as plain external links and literals as text.
 *
 * Params (on top of `predicateRefList`):
 * - `resolve` (false).
 */
export default {
  extends: predicateRefList,
  resolve: false,
};
