import loadRDs from './loadRDs.js';

/**
 * Renders the specification's diagram as an `<img>` when one was found.
 * Extends `loadRDs`, consuming its `diagram`/`diagramURI` data.
 *
 * CSS: emits `esbDiagramImage` on the image.
 */
export default {
  extends: loadRDs,
  template: `{{#if diagram}}<img class="esbDiagramImage" src="{{diagramURI}}" alt="{{nls "respec.diagram"}}" />{{/if}}`,
};
