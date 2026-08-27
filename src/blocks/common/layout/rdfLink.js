/**
 * Renders a single download link for the entry's metadata in the provided format.
 * URLs are built from `metadataURI`.
 *
 * Params:
 * - `format` ('') — the format of the metadata to download.
 * - `recursive` ('') — if set, adds `recursive=...` to the download URL.
 * - `content` ('') — NLS-prefixed text for the link.
 * CSS: none — the `<a>` is bare, so styling comes from the caller. In
 *   `rdfLinkList` each invocation is the sole child of its own `<dd>`, so it
 *   mounts into that `<dd>` and the `<a>` ends up the `<dd>`'s only child, with
 *   no placeholder `<span>` in between.
 */
export default {
  extends: 'template',
  format: '',
  recursive: '',
  content: '',
  template: `<a href="{{metadataURI}}?{{#if recursive}}recursive={{recursive}}&{{/if}}format={{format}}" rel="noopener">{{content}}</a>`,
};
