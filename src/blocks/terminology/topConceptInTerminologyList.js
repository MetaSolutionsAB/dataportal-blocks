// todo: the show-more button should clarify that it finds all concepts (not just top-level)
import listTruncated from '../common/layout/listTruncated.js';

/**
 * Lists a terminology's top-level concepts as inline concept links, truncated at
 * `limit`. Specialises `listTruncated` for `skos:topConceptOf`.
 *
 * Params (on top of `listTruncated`):
 * - `namedclick` ('concept') — click route for each concept row.
 * - `defineCount` ('topConceptsInTerminology') — registry key the count is published
 *   under, for `topConceptInTerminologyHeader` to render.
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
  defineCount: 'topConceptsInTerminology',
  relationinverse: 'skos:topConceptOf',
  rowClass: 'esbConceptLink',
};
