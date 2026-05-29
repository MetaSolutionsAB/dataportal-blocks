/*
Todo:
* replace pagination by a  "show all" button which links
  to the search page, filtered on the terminology.
  Blocked by BLOCKS-440
* parts of this can be generalised into a "vertical list with show all search"
  common block
*/
export default {
  extends: "list",
  layout: 'raw',
  namedclick: 'concept',
  vertical: false,
  limit: "inherit",
  rdftype: "skos:Concept",
  define: "conceptsInTerminology",
  relationinverse: "skos:inScheme",
  class: "test",
  listbody: '<div class="esbInlineList conceptsInTerminologyContainer">{{body}}</div>',
  rowhead: `<span class="esbConceptLink">{{link namedclick=namedclick}}</span>`,
};
