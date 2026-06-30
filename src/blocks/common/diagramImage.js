import loadRDs from './loadRDs.js';

export default {
  extends: loadRDs,
  template: `{{#if diagram}}<img class="esbDiagramImage" src="{{diagramURI}}" alt="{{nls "respec.diagram"}}" />{{/if}}`,
};
