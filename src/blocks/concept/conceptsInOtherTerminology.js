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
