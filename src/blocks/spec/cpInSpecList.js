import listShowMore from '../common/layout/listShowMore.js';

//todo: split into a list for class and one for prop
export default {
  extends: listShowMore,
  namedclick: 'vocabulary',
  limit: 'inherit',
  rdftype: ['rdfs:Class', 'rdf:Property'], //todo: these are ignored due to BLOCKS-323
  bodyClass: 'esbCPInSpecContainer',
  rowClass: 'esbCPLink',
};
