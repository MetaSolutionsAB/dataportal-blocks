/* convenience block for desciptions with standard classes */
export default {
  extends: 'template',
  property: 'dcterms:description',
  template: `{{text property=property class="esbMultiline esbDescription"}}`,
};
