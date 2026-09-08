/**
 * A promise per specification for the diagram `loadRDs` finds, published on
 * `window.esbBlocks.diagram` so a host that renders the diagram itself can
 * await the value regardless of whether its own code runs before or after the
 * block. The promises exist as soon as the bundle is loaded — asking for one
 * before `loadRDs` has run returns a pending promise rather than nothing.
 *
 * A specification is named by either of its URIs (the entry URI or the
 * resource URI), since a host knows one or the other depending on how it
 * routed to the page; both keys resolve with the same value. One is required:
 * a promise for "the specification being rendered" would settle on the first
 * one and keep that value, serving the wrong diagram to a host that navigates
 * between specifications with the bundle already loaded.
 */

/** Deferreds by URI, created on first use from either side. */
const deferreds = new Map();

const deferredFor = (uri) => {
  let deferred = deferreds.get(uri);
  if (!deferred) {
    deferred = {};
    deferred.promise = new Promise((resolve, reject) => {
      deferred.resolve = resolve;
      deferred.reject = reject;
    });
    deferreds.set(uri, deferred);
  }
  return deferred;
};

/**
 * The diagram promise for a specification.
 *
 * @param {string} uri entry URI or resource URI of the specification.
 * @returns {Promise<{entry: Object, uri: string}|null>} the diagram's resource
 *   descriptor entry and its resource URI, `null` when the specification has
 *   no diagram, rejected if loading the resource descriptors failed.
 */
export const diagramPromise = (uri) => {
  if (!uri) {
    throw new TypeError(
      'esbBlocks.diagram needs a specification URI: its entry URI or its resource URI'
    );
  }
  return deferredFor(uri).promise;
};

/**
 * Resolves a specification's diagram promise, under each of the specification's
 * two URIs. Called by `loadRDs` once its resource descriptors are in, with a
 * falsy `diagram` when there is none. Later calls for the same specification
 * are no-ops, a promise being settled once — the several blocks extending
 * `loadRDs` on one page all report the same value.
 *
 * @param {Object} entry the specification's entry.
 * @param {Object} [diagram] the diagram's resource descriptor entry.
 */
export const reportDiagram = (entry, diagram) => {
  const value = diagram
    ? { entry: diagram, uri: diagram.getResourceURI() }
    : null;
  [entry.getURI(), entry.getResourceURI()].forEach((uri) =>
    deferredFor(uri).resolve(value)
  );
};

/**
 * Rejects a specification's diagram promise, so a host awaiting it sees the
 * failure instead of waiting forever.
 *
 * @param {Object} entry the specification's entry.
 * @param {Error} error the failure to report.
 */
export const reportDiagramFailure = (entry, error) => {
  [entry.getURI(), entry.getResourceURI()].forEach((uri) =>
    deferredFor(uri).reject(error)
  );
};

window.esbBlocks = window.esbBlocks || {};
window.esbBlocks.diagram = diagramPromise;
