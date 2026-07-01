/**
 * Renders the five SKOS mapping relations (exact / close / related / broad /
 * narrow match) as separate labelled inline-concept lists, one `relatedConcepts`
 * block each.
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
    {{relatedConcepts relationProperty="skos:exactMatch" label="esb_nls:concept.exactMatch" hl="inherit" limit="inherit"}}
    {{relatedConcepts relationProperty="skos:closeMatch" label="esb_nls:concept.closeMatch" hl="inherit" limit="inherit"}}
    {{relatedConcepts relationProperty="skos:relatedMatch" label="esb_nls:concept.relatedMatch" hl="inherit" limit="inherit"}}
    {{relatedConcepts relationProperty="skos:broadMatch" label="esb_nls:concept.broadMatch" hl="inherit" limit="inherit"}}
    {{relatedConcepts relationProperty="skos:narrowMatch" label="esb_nls:concept.narrowMatch" hl="inherit" limit="inherit"}}
  `,
};
