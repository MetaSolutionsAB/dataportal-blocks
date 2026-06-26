/* convenience block for descriptions with standard classes */
export default {
  extends: 'template',
  property: 'dcterms:description',
  template: `{{text property=property class="esbMultiline esbDescription"}}`,
};
