/**
 * "Go to resource" external-link button for a Resource Descriptor. Links to its
 * `prof:hasArtifact` when present, otherwise to the descriptor's resource URI.
 *
 * CSS: emits `esbExtLinkButton` and `esbRdButton`.
 */
export default {
  extends: 'template',
  template: `
      {{#ifprop "prof:hasArtifact"}}
        <a target="_blank" class="esbExtLinkButton esbRdButton" href="{{prop "prof:hasArtifact"}}">{{nls "spec.goToResource"}}</a>
      {{/ifprop}}
      {{#ifprop "prof:hasArtifact" invert=true}}
        <a target="_blank" class="esbExtLinkButton esbRdButton" href="{{resourceURI}}">{{nls "spec.goToResource"}}</a>
      {{/ifprop}}
      `,
};
