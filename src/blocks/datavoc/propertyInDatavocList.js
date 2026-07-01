import listShowMore from '../common/layout/listShowMore.js';

/**
 * Inline list of the properties defined in the data vocabulary (specialises
 * `listShowMore`).
 *
 * Params (on top of `listShowMore`):
 * - `rdftype` ('rdf:Property') / `relationinverse` ('rdfs:isDefinedBy') — query
 *   binding for the member properties.
 * - `define` ('propertiesInDatavoc') — collection name for the result set.
 * - `namedclick` ('property') — click route for each row.
 * CSS: `bodyClass` = `esbPropertiesInDatavocContainer`, `rowClass` = `esbPropertyLink`.
 */
export default {
  extends: listShowMore,
  namedclick: 'property',
  limit: 'inherit',
  rdftype: 'rdf:Property',
  define: 'propertiesInDatavoc',
  relationinverse: 'rdfs:isDefinedBy',
  bodyClass: 'esbPropertiesInDatavocContainer',
  rowClass: 'esbPropertyLink',
};
