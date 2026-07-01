/**
 * Heading-increment helper. Synchronous `run` block returning the parent's
 * heading level (`data.root.hl`) plus one, so composites can pass `hl=(hinc)`
 * to nest headings one level deeper.
 */
export default {
  run: function (node, data) {
    return parseInt(data.root.hl, 10) + 1;
  },
  synchronous: true,
};
