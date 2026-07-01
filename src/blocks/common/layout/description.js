/**
 * Convenience block: renders an entry's description text with the project's
 * standard description classes.
 *
 * Params:
 * - `property` ('dcterms:description') — metadata property holding the text.
 * CSS: emits `esbMultiline esbDescription`.
 */
export default {
  extends: 'template',
  property: 'dcterms:description',
  template: `{{text property=property class="esbMultiline esbDescription"}}`,
};
