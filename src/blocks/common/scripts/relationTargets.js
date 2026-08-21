/**
 * Load the entries a relation points at, from the relation's own subject.
 *
 * A relation's targets are named by URI in the subject's metadata, so their
 * types — and anything else about them — are only knowable once loaded. The
 * lists that render a relation and the sections deciding whether to show those
 * lists need the same set, and need to agree on it, so the load lives here.
 *
 * Nothing is loaded when the relation has no URI-valued statements, which keeps
 * the absent-relation case free of a request.
 *
 * @param {object} registry - the block registry
 * @param {object} entry - the entry the relation is followed from
 * @param {string} relation - the predicate to follow
 * @returns {Promise<Array<object>>} the resolved targets, in metadata order
 */
export const loadRelationTargets = async (registry, entry, relation) => {
  const uris = [
    ...new Set(
      entry
        .getAllMetadata()
        .find(entry.getResourceURI(), relation)
        .filter((stmt) => stmt.getType() === 'uri')
        .map((stmt) => stmt.getValue())
    ),
  ];
  if (uris.length === 0) {
    return [];
  }
  // loadEntriesByResourceURIs tolerates misses, leaving falsy holes.
  return (
    await registry
      .get('entrystoreutil')
      .loadEntriesByResourceURIs(uris, undefined, true)
  ).filter(Boolean);
};

/**
 * Keep the targets carrying one of the given `rdf:type` values.
 *
 * The type is read from each target's own metadata, which is the whole reason
 * they had to be loaded. An empty or absent type is no filter at all.
 *
 * @param {Array<object>} targets - loaded entries, as returned above
 * @param {string|string[]} [rdftype] - the type or types to keep
 * @returns {Array<object>} the targets of that type, in the order given
 */
export const targetsOfType = (targets, rdftype) => {
  const types = rdftype ? [].concat(rdftype) : [];
  if (!types.length) {
    return targets;
  }
  return targets.filter((target) =>
    types.some(
      (type) =>
        target.getAllMetadata().find(target.getResourceURI(), 'rdf:type', type)
          .length > 0
    )
  );
};
