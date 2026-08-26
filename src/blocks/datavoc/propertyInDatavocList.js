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
 * - `listplaceholder` — says the vocabulary holds no properties, so an empty
 *   section admits as much instead of showing a bare container.
 * CSS: `rowClass` = `esbPropertyLink`. The container around the list and its
 *   show-all button is the caller's, not this block's.
 */
export default {
  extends: listTruncated,
  namedclick: 'property',
  limit: 'inherit',
  rdftype: 'rdf:Property',
  defineCount: 'propertiesInDatavoc',
  relationinverse: 'rdfs:isDefinedBy',
  listplaceholder: 'esb_nls:datavoc.noProperties',
  rowClass: 'esbPropertyLink',
};
