/**
 * "Back to the overview" button linking to the specification via the `spec`
 * namedclick.
 *
 * CSS: emits `esbSpecButton`.
 */
export default {
  extends: 'template',
  template:
    '<span class="esbSpecButton" style="float:right;margin-top: 10px">{{link namedclick="spec" content=(nls "respec.backToTheOverview")}}</span>',
};
