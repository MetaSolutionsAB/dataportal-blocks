import loadRDs from './loadRDs.js';

export default {
  extends: loadRDs,
  template: `{{#if diagram}}<img src="{{diagramURI}}" alt="{{nls "respec.diagram"}}" />{{/if}}`
};
