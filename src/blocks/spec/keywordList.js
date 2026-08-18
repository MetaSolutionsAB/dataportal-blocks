import { resolveEntry } from '../common/scripts/resolveEntry.js';

/**
 * Renders a `<dl>` group for `dcat:keyword`: the `<dt>`, then one `<dd>` per
 * keyword. Everything past `limit` is hidden behind a show-more toggle, rendered
 * as a final `<dd>` so the group stays a list of name-value pairs.
 *
 * Must be rendered as the sole child of a `<div>` in a `<dl>`, for the reason
 * given in `predicateRefList`.
 *
 * The toggle is wired once, by delegation on the mount node, so it survives the
 * template being re-rendered. Overflow keywords use `hidden="until-found"`, which
 * keeps them reachable by in-page search while collapsed.
 *
 * This is a workaround until BLOCKS-481 lands.
 *
 * Params:
 * - `limit` (5) — how many keywords show before the rest are collapsed.
 * - `labelMore` / `labelLess` (`esb_nls:general.showMore` / `…showLess`) — the
 *   toggle's text in each state.
 *
 * A keyword whose language differs from the one it would inherit gets a `lang`
 * attribute; one that matches does not, since the attribute would be redundant.
 *
 * Provides on `data`:
 * - `keywords` — one `{ value, lang, overflow }` per keyword, in metadata order,
 *   where `lang` is unset when it matches the inherited language.
 * - `keywordsOverflow` — whether there are more keywords than `limit`.
 * CSS: emits `esbKeywordToggle` on the toggle's `<dd>`; the caller supplies the
 *   container class (`esbKeywordsList` on the wrapping `<div>`).
 */
export default {
  extends: 'template',
  limit: 5,
  labelMore: 'esb_nls:general.showMore',
  labelLess: 'esb_nls:general.showLess',
  progressTemplate: ' ',
  before: (node, data, registry) => {
    if (!node.dataset.kwWired) {
      node.dataset.kwWired = 'true';
      node.addEventListener('click', (ev) => {
        const btn = ev.target.closest?.('[data-kw-toggle]');
        if (!btn) return;
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        node.querySelectorAll('[data-kw-overflow]').forEach((el) => {
          if (expanded) el.setAttribute('hidden', 'until-found');
          else el.removeAttribute('hidden');
        });
        btn.setAttribute('aria-expanded', String(!expanded));
        btn.textContent = expanded ? data.labelMore : data.labelLess;
      });
    }
    const { entry } = resolveEntry(registry, data);
    const stmts = entry
      .getAllMetadata()
      .find(entry.getResourceURI(), 'dcat:keyword');
    // A keyword only needs a lang attribute when it differs from the language it
    // would otherwise inherit, so compare against the nearest ancestor carrying one.
    const inherited = (
      node.closest('[lang]')?.getAttribute('lang') || ''
    ).toLowerCase();
    data.keywords = stmts.map((stmt, i) => {
      const lang = stmt.getLanguage() || '';
      return {
        value: stmt.getValue(),
        lang: lang.toLowerCase() === inherited ? undefined : lang,
        overflow: i >= data.limit,
      };
    });
    data.keywordsOverflow = stmts.length > data.limit;
    return Promise.resolve();
  },
  template: `<dt>{{nls "spec.keyword"}}</dt>
    {{#each keywords}}<dd{{#if lang}} lang="{{lang}}"{{/if}}{{#if overflow}} hidden="until-found" data-kw-overflow{{/if}}>{{value}}</dd>{{/each}}
    {{#if keywordsOverflow}}<dd class="esbKeywordToggle">
      <button data-kw-toggle aria-expanded="false">{{nls "general.showMore"}}</button>
      </dd>{{/if}}`,
};
