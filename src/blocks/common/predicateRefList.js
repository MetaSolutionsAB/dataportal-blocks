import { resolveEntry } from './scripts/resolveEntry.js';
import { resolvePredicateRefs } from './scripts/resolvePredicateRefs.js';

/**
 * Renders one `<dl>` group for a URI-valued predicate: the `<dt>`, then a `<dd>`
 * per value.
 *
 * Use this when the values are URIs that need resolving — to a portal link, or to
 * an RDForms choice label — and for a predicate that mixes URIs with literals.
 * For a predicate whose values are plain literals (keywords, `skos:altLabel`) use
 * `{{#eachprop}}` with a `<dd>` body instead: it emits the same `<dd>` per value
 * with none of the machinery below, keeps the `<dt>` in the caller, and offers
 * `includelang` for language-tagged values.
 *
 * Must be written as the sole child of a `<div>` in the `<dl>`, with no surrounding
 * whitespace — `<div>{{predicateRefList …}}</div>`. The runtime only renders a block
 * into its placeholder's parent (rather than into the placeholder itself) when the
 * placeholder is that parent's single child, and that is what makes these `<dd>`s
 * siblings of the `<dt>` instead of the contents of a stray `<span>`. It also means
 * the `<dt>` has to come from here rather than the caller. Since a `<dl>` may not mix
 * bare `dt`/`dd` groups with `div` groups, every row of the surrounding `<dl>` must
 * be `div`-grouped too.
 *
 * Iteration is hand-rolled rather than delegated to a `list`, which wraps its rows
 * in containers of its own and so cannot emit a `<dt>` plus sibling `<dd>`s.
 *
 * Params:
 * - `predicate` ('') — the predicate to read. Not `property`: that is a reserved
 *   block param, and would rebind this block to a bnode object of the predicate.
 * - `dtContent` ('') — NLS-prefixed text for the `<dt>`.
 * - `namedclick` ('') — click route for values that resolve to an entry.
 * - `choiceItems` ('') — comma-separated RDForms item ids whose static choices
 *   label this predicate's generic/datatype values. Per item rather than per value,
 *   as one value can carry different labels under different items.
 * - `resolve` (true) — look values up as local entries. `false` for a predicate
 *   whose values are external references by definition, so they never become
 *   portal links.
 * - `excludeType` ('') — skip resolved entries of this `rdf:type`, for a predicate
 *   whose values collide with another entry sharing the resource URI.
 * - `rowClass` ('') — class on a resolved-entry link; the caller supplies the
 *   per-type hook (`esbClassLink`, `esbPropertyLink`, `esbSpecLink`).
 * - `labelClass` ('esbRefLabel') — class on a value rendered as an RDForms label.
 * - `textClass` ('esbRefText') — class on a literal, or a URI that could not be
 *   linked at all.
 * - `compositeClass` ('esbRefComposite') — class on the blank-node placeholder.
 * - `externalRowClass` ('esbExternalRefLink') — class on an unresolved URI link.
 *
 * Provides on `data`:
 * - `refs` — one descriptor per value, in metadata order (see
 *   `scripts/resolvePredicateRefs.js`); empty when the predicate is absent, has no
 *   renderable values, or resolution failed. The template renders nothing at all in
 *   that case, so the block is safe to use without an `{{#ifprop}}` gate.
 * CSS: emits `rowClass` / `esbRefLabel` / `esbRefText` / `esbRefComposite` /
 *   `esbExternalRefLink` per value.
 */
export default {
  extends: 'template',
  predicate: '',
  dtContent: '',
  namedclick: '',
  choiceItems: '',
  resolve: true,
  excludeType: '',
  rowClass: '',
  labelClass: 'esbRefLabel',
  textClass: 'esbRefText',
  compositeClass: 'esbRefComposite',
  externalRowClass: 'esbExternalRefLink',
  before: async function (node, data, registry) {
    const { entry } = resolveEntry(registry, data);
    data.refs = [];
    try {
      data.refs = (
        await resolvePredicateRefs(registry, entry, data.predicate, {
          choiceItems: data.choiceItems
            ? data.choiceItems.split(',').map((id) => id.trim())
            : [],
          resolve: data.resolve,
          excludeType: data.excludeType,
        })
      ).map((ref) =>
        ref.entry
          ? {
              localContext: ref.entry.getContext().getId(),
              localId: ref.entry.getId(),
            }
          : ref
      );
    } catch (e) {
      console.error(
        `predicateRefList: resolving ${data.predicate} for ${entry && entry.getURI()} failed; the row is omitted.`,
        e
      );
    }
  },
  // Keeps the row's shape while resolving, rather than an untitled line in the <dl>.
  progressTemplate: `<dt>{{dtContent}}</dt><dd>{{nls "general.loading"}}</dd>`,
  // The <span> around the link must stay tight: the link block mounts into it, and
  // copies its class onto the <a> before overwriting it with `entryscape`, so
  // letting the link mount into the <dd> instead would strip the <dd>.
  //
  // {{#each}} rebinds `this` to the descriptor, so this block's own params are
  // reached through @root.
  template: `
    {{#if this.refs}}
      <dt>{{dtContent}}</dt>
      {{#each this.refs}}
        <dd>
          {{#if this.localId}}
            <span>{{link entry=this.localId context=this.localContext namedclick=@root.namedclick class=@root.rowClass}}</span>
          {{else if this.label}}
            <span class="{{@root.labelClass}}">{{this.label}}</span>
          {{else if this.text}}
            <span class="{{@root.textClass}}">{{this.text}}</span>
          {{else if this.composite}}
            <span class="{{@root.compositeClass}}">{{nls "general.compositeValue"}}</span>
          {{else if this.href}}
            <a href="{{this.href}}" target="_blank" rel="noopener noreferrer" class="{{@root.externalRowClass}}">{{this.uri}}</a>
          {{else}}
            <span class="{{@root.textClass}}">{{this.uri}}</span>
          {{/if}}
        </dd>
      {{/each}}
    {{/if}}
  `,
};
