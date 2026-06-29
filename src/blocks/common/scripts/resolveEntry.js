/**
 * Resolve the entry a block is bound to.
 *
 * Blocks receive `data.entry` either as an already-loaded entry object or as a
 * cached entry id (a string) paired with `data.context`; this normalises both
 * forms and returns the entry together with the entrystore.
 *
 * @param {object} registry - the block registry passed to a before-script
 * @param {object} data - the block's data object (`entry`, `context`)
 * @returns {{ es: object, entry: object }} the entrystore and resolved entry
 */
export const resolveEntry = (registry, data) => {
  const es = registry.get('entrystore');
  const entry =
    typeof data.entry === 'string'
      ? es.getCache().get(es.getEntryURI(data.context, data.entry))
      : data.entry;
  return { es, entry };
};
