/*
Todo:
* Drop the `sr-only` span once the runtime names custom expand buttons itself.
* Blocked by BLOCKS-473
*/
/**
 * List of a specification's Resource Descriptors (`prof:hasResource`). Each row
 * shows the type badge, title, role(s) and reused-from link, with an expandable
 * subject + metadata view. Base block — `introducedResourceDescriptors` and
 * `reusedResourceDescriptors` extend it with a `constraints` filter.
 *
 * The expand toggle is the button in `rowhead`, not the runtime's chevron
 * (`expandButton: false`); the runtime wires it by its `esbExpandButton` class,
 * which is therefore load-bearing. It scans for that class once, during the
 * `rowhead` render only, so the button has to stay there — anywhere else it
 * renders fine and does nothing. `expandButton: false` also disables the
 * runtime's `clickExpand` handling, here and in the extenders (BLOCKS-474).
 * `style.css` shows one label or the other by `aria-expanded`, the disclosure
 * icon is left to the host, and the `sr-only` span gives each row's button a
 * distinct name ("Visa mer <label>", "Visa mindre <label>" once expanded).
 * Only roles from the PROF role vocabulary (the bundle's `prof:hasRole` choices)
 * are listed; any other role has no label to show and is left out, and the role
 * group is omitted when none of the roles is a PROF role.
 *
 * Params:
 * - `hl` (4) — heading level for each row's title.
 * - `placeholderText` — NLS key shown when the list is empty (overridden by the
 *   reused variant).
 * CSS: emits `esbResourceDescriptors` (container), `esbSpecPart` (title link),
 *   `esbResourcesFeatures` (the role/reused-from `<dl>`), `esbRdExpandButton`
 *   (the expand toggle) and its `esbExpandLabel` / `esbUnexpandLabel` spans.
 *   A role's `<dd>` carries `lang` when its label is in another language than
 *   the page.
 */
export default {
  extends: 'list',
  semanticHtml: true,
  hl: 4,
  relation: 'prof:hasResource',
  dependencyproperties: 'prof:isInheritedFrom',
  expandButton: false,
  listbody: '<div class="esbResourceDescriptors">{{body}}</div>',
  placeholderText: 'esb_nls:spec.thisSpecificationHasNoResources',
  listplaceholder:
    '<div class="alert alert-info" role="alert">{{placeholderText}}</div>',
  rowhead: `{{resourceDescriptorTypeMarker}}
    <h{{hl}}>{{text class="esbSpecPart"}}</h{{hl}}>
    <dl class="esbResourcesFeatures">
      {{#ifprop "prof:hasRole" uri="profrole:specification,profrole:example,profrole:guidance,profrole:mapping,profrole:constraints,profrole:schema,profrole:validation,profrole:vocabulary"}}
        <div>
          <dt class="sr-only">{{nls "spec.role"}}</dt>
          {{#eachprop "prof:hasRole"}}{{#if label}}<dd {{langattr}}>{{label}}</dd>{{/if}}{{/eachprop}}
        </div>
      {{/ifprop}}
    </dl>
    {{resourceDescriptorButton}}
    <button type="button" class="esbExpandButton esbRdExpandButton">
      <span class="esbExpandLabel">{{nls "spec.showMore"}}</span>
      <span class="esbUnexpandLabel">{{nls "spec.showLess"}}</span>
      <span class="sr-only">{{text}}</span>
    </button>
  `,
  rowexpand: `{{#ifprop "prof:isInheritedFrom,dcterms:subject"}}
      <dl class="esbResourcesFeatures">
        {{#ifprop "prof:isInheritedFrom"}}
          <div>
            <dt>{{nls "spec.reusedFrom"}}</dt>
            <dd>{{relatedLink relation="prof:isInheritedFrom" namedClick="spec" linkClass="esbSpecLink"}}</dd>
          </div>
        {{/ifprop}}
        {{#ifprop "dcterms:subject"}}
          <div>{{resourceDescriptorSubject}}</div>
        {{/ifprop}}
      </dl>
    {{/ifprop}}
    {{view filterpredicates="prof:isInheritedFrom,dcterms:subject"}}`,
};
