/**
 * Create a stand-in entry for a URI that resolves to no entry in this EntryStore.
 *
 * The `list` block renders entries and nothing else, so a value that does not resolve
 * needs an object that behaves like one. This inherits everything from the entry whose
 * metadata carried the URI and overrides `getResourceURI`, which is what the runtime
 * itself does for blank nodes in its `property` mode (`createDelegatedEntry`, not
 * exported — hence this copy). `getContext` and `getId` keep delegating, which is what
 * the list's row rendering calls.
 *
 * `esbURI` is what marks a row as unresolved: a real entry never carries it, so a
 * template can branch on it. It is set as an *own* property, since Handlebars refuses to
 * read inherited ones. Templates use it as a link target, so the caller is responsible
 * for passing only a URI that is safe to link to.
 *
 * @param {object} entry - the entry whose metadata carried the URI
 * @param {string} uri - the URI that resolved to nothing, vetted as safe to link to
 * @returns {object} an entry-like object carrying `esbURI`
 */
export const delegatedEntry = (entry, uri) => {
  const delegated = Object.create(entry);
  delegated.getResourceURI = () => uri;
  delegated.esbURI = uri;
  return delegated;
};
