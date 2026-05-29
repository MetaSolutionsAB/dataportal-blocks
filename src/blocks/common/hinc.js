export default {
  run: function (node, data) {
    return parseInt(data.root.hl, 10) + 1;
  },
  synchronous: true,
};
