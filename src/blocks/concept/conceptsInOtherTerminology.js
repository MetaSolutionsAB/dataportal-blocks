export default {
  extends: 'template',
  hl: '3',
  limit: 'inherit',
  template: `
    {{relatedConcepts relationProperty="skos:exactMatch" label="Samma" hl="inherit" limit="inherit"}}
    {{relatedConcepts relationProperty="skos:closeMatch" label="Snarlika" hl="inherit" limit="inherit"}}
    {{relatedConcepts relationProperty="skos:relatedMatch" label="Relaterade" hl="inherit" limit="inherit"}}
    {{relatedConcepts relationProperty="skos:broadMatch" label="Överordnade" hl="inherit" limit="inherit"}}
    {{relatedConcepts relationProperty="skos:narrowMatch" label="Underordnade" hl="inherit" limit="inherit"}}
  `,
};
