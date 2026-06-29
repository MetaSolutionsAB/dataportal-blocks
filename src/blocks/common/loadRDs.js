import { resolveEntry } from './scripts/resolveEntry.js';

export default {
  extends: 'template',
  before: async function (node, data, registry) {
    const { es, entry } = resolveEntry(registry, data);
    const esu = registry.get('entrystoreutil');

    const metaValueEndsWith = (e, pred, suffix) =>
      e.getAllMetadata().find(null, pred).some(stmt => stmt.getValue().endsWith(suffix));

    const resourceURIs = entry.getAllMetadata().find(entry.getResourceURI(), 'prof:hasResource').map(stmt => stmt.getValue());
    const resources = await esu.loadEntriesByResourceURIs(resourceURIs);
    let ap = resources.find(e => e.getAllMetadata().find(null, 'dcterms:conformsTo', 'inspec:SHACL').length > 0);
    if (!ap) {
      // fallback: older data uses a local URI ending in 'SHACL-INSPEC/1.0' instead of inspec:SHACL
      ap = resources.find(e => metaValueEndsWith(e, 'dcterms:conformsTo', 'SHACL-INSPEC/1.0'));
    }
    const diagram = resources.find(e => metaValueEndsWith(e, 'dcterms:format', 'image/svg+xml'));
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
