/**
 * URI prefix of the "nationell grunddatamängd" concepts. A resource is
 * considered grunddata when one of its `dcterms:subject` values is a concept
 * under this namespace.
 */
export const GRUNDDATA_PREFIX = 'https://dataportal.se/concepts/grunddata/';

/**
 * Whether an entry is a "nationell grunddatamängd", i.e. carries a
 * `dcterms:subject` naming a grunddata concept.
 *
 * @param {object} entry - an entrystore entry (e.g. a `dcat:Dataset` or a specification)
 * @returns {boolean} true when the entry has a grunddata `dcterms:subject`
 */
export const isGrunddata = (entry) =>
  entry
    .getAllMetadata()
    .find(entry.getResourceURI(), 'dcterms:subject')
    .some((stmt) => stmt.getValue().startsWith(GRUNDDATA_PREFIX));
