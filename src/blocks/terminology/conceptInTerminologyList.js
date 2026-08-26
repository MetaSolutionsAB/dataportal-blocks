import listTruncated from '../common/layout/listTruncated.js';

/**
 * Lists a terminology's concepts as inline concept links, truncated at `limit`.
 * Specialises `listTruncated` for `skos:inScheme`.
 *
 * The list is never expected to be empty so the placeholder is only there as a
 * defence against a misconfigured terminology.
 *
 * Params (on top of `listTruncated`):
 * - `namedclick` ('concept') — click route for each concept row.
 * - `defineCount` ('conceptsInTerminology') — registry key the count is published
 *   under, for `conceptInTerminologyHeader` to render.
 * - `rowClass` ('esbConceptLink') — per-row link class.
 * - `listplaceholder` — says the terminology holds no concepts, which is
 * unexpected and likely an indicator of an error.
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
  listplaceholder: 'esb_nls:conceptScheme.noConcepts',
};
