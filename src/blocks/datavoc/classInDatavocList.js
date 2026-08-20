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
 * CSS: `bodyClass` = `esbClassesInDatavocContainer`, `rowClass` = `esbClassLink`.
 */
export default {
  extends: listTruncated,
  namedclick: 'class',
  limit: 'inherit',
  rdftype: 'rdfs:Class',
  defineCount: 'classesInDatavoc',
  relationinverse: 'rdfs:isDefinedBy',
  bodyClass: 'esbClassesInDatavocContainer',
  rowClass: 'esbClassLink',
};
