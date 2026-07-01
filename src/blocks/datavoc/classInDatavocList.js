import listShowMore from '../common/layout/listShowMore.js';

/**
 * Inline list of the classes defined in the data vocabulary (specialises
 * `listShowMore`).
 *
 * Params (on top of `listShowMore`):
 * - `rdftype` ('rdfs:Class') / `relationinverse` ('rdfs:isDefinedBy') — query
 *   binding for the member classes.
 * - `define` ('classesInDatavoc') — collection name for the result set.
 * - `namedclick` ('class') — click route for each row.
 * CSS: `bodyClass` = `esbClassesInDatavocContainer`, `rowClass` = `esbClassLink`.
 */
export default {
  extends: listShowMore,
  namedclick: 'class',
  limit: 'inherit',
  rdftype: 'rdfs:Class',
  define: 'classesInDatavoc',
  relationinverse: 'rdfs:isDefinedBy',
  bodyClass: 'esbClassesInDatavocContainer',
  rowClass: 'esbClassLink',
};
