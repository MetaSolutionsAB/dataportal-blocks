export default {
  extends: 'template',
  relation: 'dcterms:publisher',
  template: `<a class="p-name fn u-url url" href='{{prop "foaf:mbox"}}'>{{text}}</a>`,
};
