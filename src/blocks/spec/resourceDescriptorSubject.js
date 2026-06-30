// Renders the resource descriptor's dcterms:subject as a link. The before
// script looks up whether the subject URI corresponds to a local entry and,
// from the subject's type combined with the descriptor's prof:hasRole, picks
// the portal namedclick (ap / datavoc / terminology). When nothing maps it
// falls back to a plain link to the subject URI.
import { resolveEntry } from '../common/scripts/resolveEntry.js';

export default {
  extends: 'template',
  before: async function (node, data, registry) {
    const { es, entry } = resolveEntry(registry, data);

    const rdMeta = entry.getAllMetadata();
    const rduri = entry.getResourceURI();
    const hasRole = (role) =>
      rdMeta.find(rduri, 'prof:hasRole', role).length > 0;

    const subjectURI = rdMeta.findFirstValue(rduri, 'dcterms:subject');
    data.subjectURI = subjectURI;
    // Only http(s) subjects are rendered as a clickable link; guards against a
    // javascript:/data: scheme in the (untrusted) metadata becoming an XSS sink.
    data.subjectHref = /^https?:\/\//i.test(subjectURI || '')
      ? subjectURI
      : undefined;

    if (subjectURI) {
      const matches = [];
      await es
        .newSolrQuery()
        .resource(subjectURI)
        .forEach((match) => {
          // Resource descriptors commonly share their subject's URI; they are
          // not the entry we want to link to, so exclude them.
          const isRD =
            match
              .getAllMetadata()
              .find(
                match.getResourceURI(),
                'rdf:type',
                'prof:ResourceDescriptor'
              ).length > 0;
          if (!isRD) matches.push(match);
        });

      if (matches.length > 1) {
        console.warn(
          `resourceDescriptorSubject: ${matches.length} local entries match dcterms:subject ${subjectURI}; using the first.`
        );
      }

      const match = matches[0];
      if (match) {
        const md = match.getAllMetadata();
        const ruri = match.getResourceURI();
        const isOntology = md.find(ruri, 'rdf:type', 'owl:Ontology').length > 0;
        const isProfile = md.find(ruri, 'rdf:type', 'prof:Profile').length > 0; // AP URI is same as spec URI per INSPEC rule AP-2
        const isConceptScheme =
          md.find(ruri, 'rdf:type', 'skos:ConceptScheme').length > 0;

        let namedclick;
        if ((isOntology || isProfile) && hasRole('profrole:constraints')) {
          namedclick = 'ap';
        } else if (isOntology && hasRole('profrole:vocabulary')) {
          namedclick = 'datavoc';
        } else if (isConceptScheme && hasRole('profrole:vocabulary')) {
          namedclick = 'terminology';
        }

        if (namedclick) {
          data.namedclick = namedclick;
          data.localContext = match.getContext().getId();
          data.localId = match.getId();
        } else {
          console.warn(
            `resourceDescriptorSubject: subject ${subjectURI} matched a local entry but its type/role combination maps to no namedclick; rendering a plain link.`
          );
        }
      }
    }
    return Promise.resolve();
  },
  template: `{{#if this.subjectURI}}
    <dl>
      <dt>{{nls "spec.subject"}}</dt>
      <dd>
        {{#if this.namedclick}}
          {{link entry=this.localId context=this.localContext namedclick=this.namedclick}}
        {{else}}
          {{#if this.subjectHref}}<a href="{{this.subjectHref}}">{{this.subjectURI}}</a>{{else}}{{this.subjectURI}}{{/if}}
        {{/if}}
      </dd>
    </dl>
  {{/if}}`,
};
