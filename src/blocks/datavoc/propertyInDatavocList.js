import listTruncated from '../common/layout/listTruncated.js';

/**
 * Inline list of the properties defined in the data vocabulary (specialises
 * `listTruncated`).
 *
 * Params (on top of `listTruncated`):
 * - `rdftype` ('rdf:Property') / `relationinverse` ('rdfs:isDefinedBy') — query
 *   binding for the member properties.
 * - `defineCount` ('propertiesInDatavoc') — registry key the count is
 *   published under, for `propertyInDatavocHeader` to render.
 * - `namedclick` ('property') — click route for each row.
 * CSS: `bodyClass` = `esbPropertiesInDatavocContainer`, `rowClass` = `esbPropertyLink`.
 */
export default {
  extends: listTruncated,
  namedclick: 'property',
  limit: 'inherit',
  rdftype: 'rdf:Property',
  defineCount: 'propertiesInDatavoc',
  relationinverse: 'rdfs:isDefinedBy',
  bodyClass: 'esbPropertiesInDatavocContainer',
  rowClass: 'esbPropertyLink',
};
