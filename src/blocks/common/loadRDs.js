import { resolveEntry } from './scripts/resolveEntry.js';
import {
  reportDiagram,
  reportDiagramFailure,
} from './scripts/diagramPromise.js';

/**
 * Loads a specification's Resource Descriptor entries and surfaces the
 * application profile (AP) and diagram among them. Renders nothing itself —
 * extended by blocks that consume the data it injects (e.g. `diagramImage`,
 * `specInspectAPButton`).
 *
 * Also publishes the diagram on `window.esbBlocks.diagram` (see
 * `scripts/diagramPromise.js`) for a host rendering the diagram itself.
 *
 * An RD describes its file rather than being it: the file is reached through
 * the RD's `prof:hasArtifact`, and the RD's own resource URI is often a
 * `urn:uuid:`. An RD without `prof:hasArtifact` falls back to its resource URI.
 *
 * Provides on `data`:
 * - `ap` — the RD whose resource conforms to `inspec:SHACL` (falls back to a
 *   legacy URI ending `SHACL-INSPEC/1.0`); unset if none.
 * - `apURI` — that AP's SHACL file URI (set only when `ap` is).
 * - `diagram` — the RD whose resource is `image/svg+xml`; unset if none.
 * - `diagramURI` — that diagram's SVG file URI (set only when `diagram` is).
 */
export default {
  extends: 'template',
  before: async function (node, data, registry) {
    const { es, entry } = resolveEntry(registry, data);
    const esu = registry.get('entrystoreutil');

    const metaValueEndsWith = (e, pred, suffix) =>
      e
        .getAllMetadata()
        .find(null, pred)
        .some((stmt) => stmt.getValue().endsWith(suffix));
    const artifactURI = (e) =>
      e
        .getAllMetadata()
        .findFirstValue(e.getResourceURI(), 'prof:hasArtifact') ||
      e.getResourceURI();

    const resourceURIs = entry
      .getAllMetadata()
      .find(entry.getResourceURI(), 'prof:hasResource')
      .map((stmt) => stmt.getValue());
    let resources;
    try {
      resources = await esu.loadEntriesByResourceURIs(resourceURIs);
    } catch (error) {
      // the host's diagram promise must settle, or it waits forever
      reportDiagramFailure(entry, error);
      throw error;
    }
    let ap = resources.find(
      (e) =>
        e.getAllMetadata().find(null, 'dcterms:conformsTo', 'inspec:SHACL')
          .length > 0
    );
    if (!ap) {
      // fallback: older data uses a local URI ending in 'SHACL-INSPEC/1.0' instead of inspec:SHACL
      ap = resources.find((e) =>
        metaValueEndsWith(e, 'dcterms:conformsTo', 'SHACL-INSPEC/1.0')
      );
    }
    const diagram = resources.find((e) =>
      metaValueEndsWith(e, 'dcterms:format', 'image/svg+xml')
    );
    if (ap) {
      data.ap = ap;
      data.apURI = artifactURI(ap);
    }
    if (diagram) {
      data.diagram = diagram;
      data.diagramURI = artifactURI(diagram);
    }
    reportDiagram(entry, diagram, data.diagramURI);
    return Promise.resolve();
  },
  template: ``,
};
