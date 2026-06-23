export default {
  extends: 'template',
  before: async function (node, data, registry) {
    const es = registry.get('entrystore');
    const esu = registry.get('entrystoreutil');
    const isCached = typeof data.entry === 'string';
    const entry = isCached
      ? es.getCache().get(es.getEntryURI(data.context, data.entry))
      : data.entry;

    const resourceURIs = entry.getMetadata().find(entry.getResourceURI(), 'prof:hasResource').map(stmt => stmt.getValue());
    const resources = await esu.loadEntriesByResourceURIs(resourceURIs);
    //should use inspec-uris
    const ap = resources.find(e => e.getMetadata().find(null, 'dcterms:conformsTo').filter(stmt => stmt.getValue().endsWith('SHACL-INSPEC/1.0')).length > 0);
    const diagram = resources.find(e => e.getMetadata().find(null, 'dcterms:format').filter(stmt => stmt.getValue().endsWith('image/svg+xml')).length > 0);
    if (ap) {
      data.ap = ap;
    }
    if (diagram) {
      data.diagram = diagram;
      data.diagramURI = diagram.getResourceURI();
    }
    return Promise.resolve();
  },
  template: ``
};
