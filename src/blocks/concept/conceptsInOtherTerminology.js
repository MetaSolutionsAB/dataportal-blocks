/**
 * Renders the five SKOS mapping relations (exact / close / related / broad /
 * narrow match) as separate labelled inline-concept lists, one `matchingConcepts`
 * block each.
 *
 * Each section is gated here rather than inside `matchingConcepts`, because the
 * wrapper the block mounts into belongs to this template: a gate in the block
 * could suppress its own content but not the element around it, leaving an empty
 * div behind for every relation the concept does not carry.
 *
 * Params:
 * - `hl` ('3') — heading level for each relation's sub-heading.
 * - `limit` ('inherit') — row limit passed to each list.
 */
export default {
  extends: 'template',
  hl: '3',
  limit: 'inherit',
  template: `
    {{#ifprop "skos:exactMatch"}}
      <div>{{matchingConcepts
        relationProperty="skos:exactMatch"
        label="esb_nls:concept.exactMatch"
        defineCount="exactMatchConcepts"
        hl="inherit"
        limit="inherit"
      }}</div>
    {{/ifprop}}
    {{#ifprop "skos:closeMatch"}}
      <div>{{matchingConcepts
        relationProperty="skos:closeMatch"
        label="esb_nls:concept.closeMatch"
        defineCount="closeMatchConcepts"
        hl="inherit"
        limit="inherit"
      }}</div>
    {{/ifprop}}
    {{#ifprop "skos:relatedMatch"}}
      <div>{{matchingConcepts
        relationProperty="skos:relatedMatch"
        label="esb_nls:concept.relatedMatch"
        defineCount="relatedMatchConcepts"
        hl="inherit"
        limit="inherit"
      }}</div>
    {{/ifprop}}
    {{#ifprop "skos:broadMatch"}}
      <div>{{matchingConcepts
        relationProperty="skos:broadMatch"
        label="esb_nls:concept.broadMatch"
        defineCount="broadMatchConcepts"
        hl="inherit"
        limit="inherit"
      }}</div>
    {{/ifprop}}
    {{#ifprop "skos:narrowMatch"}}
      <div>{{matchingConcepts
        relationProperty="skos:narrowMatch"
        label="esb_nls:concept.narrowMatch"
        defineCount="narrowMatchConcepts"
        hl="inherit"
        limit="inherit"
      }}</div>
    {{/ifprop}}
  `,
};
