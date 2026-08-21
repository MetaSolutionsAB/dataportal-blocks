/**
 * Renders the five SKOS mapping relations (exact / close / related / broad /
 * narrow match) as separate labelled inline-concept lists, one `matchingConcepts`
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
    {{matchingConcepts
      relationProperty="skos:exactMatch"
      label="esb_nls:concept.exactMatch"
      defineCount="exactMatchConcepts"
      hl="inherit"
      limit="inherit"
    }}
    {{matchingConcepts
      relationProperty="skos:closeMatch"
      label="esb_nls:concept.closeMatch"
      defineCount="closeMatchConcepts"
      hl="inherit"
      limit="inherit"
    }}
    {{matchingConcepts
      relationProperty="skos:relatedMatch"
      label="esb_nls:concept.relatedMatch"
      defineCount="relatedMatchConcepts"
      hl="inherit"
      limit="inherit"
    }}
    {{matchingConcepts
      relationProperty="skos:broadMatch"
      label="esb_nls:concept.broadMatch"
      defineCount="broadMatchConcepts"
      hl="inherit"
      limit="inherit"
    }}
    {{matchingConcepts
      relationProperty="skos:narrowMatch"
      label="esb_nls:concept.narrowMatch"
      defineCount="narrowMatchConcepts"
      hl="inherit"
      limit="inherit"
    }}
  `,
};
