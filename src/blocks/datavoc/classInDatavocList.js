import listTruncated from '../common/layout/listTruncated.js';

/**
 * Inline list of the classes defined in the data vocabulary (specialises
 * `listTruncated`).
 *
 * Params (on top of `listTruncated`):
 * - `rdftype` ('rdfs:Class') / `relationinverse` ('rdfs:isDefinedBy') — query
 *   binding for the member classes.
 * - `defineCount` ('classesInDatavoc') — registry key the count is published
 *   under, for `classInDatavocHeader` to render.
 * - `namedclick` ('class') — click route for each row.
 * - `listplaceholder` — says the vocabulary holds no classes, so an empty
 *   section admits as much instead of showing a bare container.
 * CSS: `rowClass` = `esbClassLink`. The container around the list and its
 *   show-all button is the caller's, not this block's.
 */
export default {
  extends: listTruncated,
  namedclick: 'class',
  limit: 'inherit',
  rdftype: 'rdfs:Class',
  defineCount: 'classesInDatavoc',
  relationinverse: 'rdfs:isDefinedBy',
  listplaceholder: `esb_nls:datavoc.noClasses`,
  rowClass: 'esbClassLink',
};
