import listTruncated from '../common/layout/listTruncated.js';

/**
 * Lists a terminology's concepts as inline concept links, truncated at `limit`.
 * Specialises `listTruncated` for `skos:inScheme`.
 *
 * Params (on top of `listTruncated`):
 * - `namedclick` ('concept') — click route for each concept row.
 * - `defineCount` ('conceptsInTerminology') — registry key the count is published
 *   under, for `conceptInTerminologyHeader` to render.
 * - `rowClass` ('esbConceptLink') — per-row link class.
 * CSS: rows get `esbConceptLink`; the list's own container gets only
 *   `esbInlineList`, the classed one around it and the show-all button being
 *   the caller's.
 */
export default {
  extends: listTruncated,
  namedclick: 'concept',
  limit: 'inherit',
  rdftype: 'skos:Concept',
  defineCount: 'conceptsInTerminology',
  relationinverse: 'skos:inScheme',
  rowClass: 'esbConceptLink',
};
