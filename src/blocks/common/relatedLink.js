// Helper block to ensure link label is fetched from the correct entity
export default {
  extends: 'template',
  relation: 'adms:last',
  namedClick: '',
  class: undefined,
  template: '<span {{#if class}}class="{{class}}"{{/if}}>{{link namedclick=namedClick}}</span>'
};
