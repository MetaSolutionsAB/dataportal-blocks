/**
 * Renders a link whose label is resolved from the related entity (via
 * `relation`) rather than the current entry.
 *
 * The <span> stays bare and tight: {{link}} mounts into it as its sole child,
 * copying its class onto the <a> before overwriting it with `entryscape`.
 *
 * Constrain it with `rdftype` where the relation's target URI may be shared by
 * more than one entry: a ResourceDescriptor may share a URI with the subject it
 * describes, so an unconstrained lookup can resolve the RD rather than the
 * intended ConceptScheme or Ontology.
 *
 * Params:
 * - `relation` ('adms:last') — relation to the entity supplying the link label.
 * - `namedClick` ('') — click route (note the capital C; mapped to the
 *   helper's `namedclick`).
 * - `linkClass` ('') — class on the anchor, as in `showAllLink`.
 * - `rdftype` ('') — `rdf:type` the related entity must have; empty means no
 *   constraint.
 * CSS: emits `linkClass` on the `<a>`.
 */
export default {
  extends: 'template',
  relation: 'adms:last',
  namedClick: '',
  linkClass: '',
  rdftype: '',
  template: '<span>{{link namedclick=namedClick class=linkClass}}</span>',
};
