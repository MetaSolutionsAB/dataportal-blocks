/**
 * Renders a single download link for the entry's metadata in the provided format.
 * URLs are built from `metadataURI`.
 *
 * Params:
 * - `format` ('') — the format of the metadata to download.
 * - `recursive` ('') — if set, adds `recursive=...` to the download URL.
 * - `content` ('') — NLS-prefixed text for the link.
 * CSS: none — the `<a>` is bare, so layout comes from the caller's container.
 *   Since that container holds several invocations, each keeps its placeholder
 *   `<span>`, and those spans — not the links — are the flex items.
 */
export default {
  extends: 'template',
  format: '',
  recursive: '',
  content: '',
  template: `<a href="{{metadataURI}}?{{#if recursive}}recursive={{recursive}}&{{/if}}format={{format}}" rel="noopener">{{content}}</a>`,
};
