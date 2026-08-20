/**
 * Read the row count a truncating list published, and derive the overflow.
 *
 * `common/scripts/listEntries.js` publishes `{resultsize, shown, truncated}`
 * under the list's `defineCount` key once its rows resolve. This awaits it, so
 * a block beside the list can say something about what the list left out.
 *
 * The wait never times out: `registry.onInit` resolves as soon as the key is
 * set, at once if it already is, but a key no list ever publishes leaves the
 * caller pending forever and a block waiting on one renders nothing at all. So
 * a misspelled key fails silently, exactly as it already does on the `results`
 * blocks. Only an empty key can be caught here, and is.
 *
 * @param {object} registry - the block registry passed to a before-script
 * @param {object} data - the block's data object; reads `useCount`, the key
 * @returns {Promise<object>} the published counts plus `overflow`, how many
 *   rows the list held back
 */
export const listCount = async (registry, data) => {
  if (!data.useCount) {
    throw new TypeError(
      "listCount: needs a `useCount` naming the list's defineCount key."
    );
  }
  const counts = await registry.onInit(data.useCount);
  return { ...counts, overflow: counts.resultsize - counts.shown };
};

/**
 * Publish a truncating list's row count, for `listCount` to read back.
 *
 * The counterpart of the above, kept beside it so the shape of the published
 * object is defined once. Called by whatever builds a list's rows: the shared
 * `listEntries`, or a block with an `entries` function of its own.
 *
 * @param {object} registry - the block registry
 * @param {object} conf - the list's config; publishes only when `defineCount`
 *   is set
 * @param {Array} rows - the rows the list will render, after the cap
 * @param {number} total - how many rows there were before the cap
 * @returns {void}
 */
export const publishListCount = (registry, conf, rows, total) => {
  if (!conf.defineCount) return;
  registry.set(conf.defineCount, {
    resultsize: total,
    shown: rows.length,
    truncated: total > rows.length,
  });
};
