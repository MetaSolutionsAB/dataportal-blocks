/**
 * "Back to the overview" button linking to the specification via the `spec`
 * namedclick.
 *
 * CSS: emits `dpButton`.
 */
export default {
  extends: 'template',
  template:
    '<span class="dpButton" style="float:right;margin-top: 10px">{{link namedclick="spec" content=(nls "respec.backToTheOverview")}}</span>',
};
