/**
 * Page shown when a link to a resource could not be resolved to an entry on
 * the portal: says that the resource is not indexed yet and links to it at its
 * own URI.
 *
 * Params:
 * - `hl` ('1') — heading level for the `<h{hl}>` title.
 * - `resourceType` ('') — type of the unresolved resource (`property`,
 *   `class`, `terminology` or `concept`); picks the heading from `headings`.
 *   Any other value, or none, gives `headings.default`.
 * - `headings` — heading per `resourceType`, plus `default`, as `esb_nls:`
 *   values.
 * - `externalUri` ('') — URI of the unresolved resource. Linked only when
 *   it is `http(s)`; any other scheme is printed as plain text.
 *
 * CSS: emits `esbHeading` on the heading wrapper, `esbMainContent` on the
 * content wrapper, `esbExtLink` on the link, and `esbRefText` on a URI shown
 * as plain text.
 *
 * Provides (set in `before`):
 * - `data.heading` — the heading picked from `headings`.
 * - `data.externalLink` — `externalUri` when it is `http(s)`, otherwise
 *   undefined.
 */
export default {
  extends: 'template',
  hl: '1',
  resourceType: '',
  headings: {
    property: 'esb_nls:externalResource.externalResourceHeading.property',
    class: 'esb_nls:externalResource.externalResourceHeading.class',
    terminology: 'esb_nls:externalResource.externalResourceHeading.terminology',
    concept: 'esb_nls:externalResource.externalResourceHeading.concept',
    default: 'esb_nls:externalResource.externalResourceHeading.default',
  },
  externalUri: '',
  before: async function (node, data) {
    const { headings, resourceType } = data;
    // hasOwn: resourceType may come from the URL, so `constructor` and the like
    // must not resolve to Object.prototype members.
    data.heading = Object.hasOwn(headings, resourceType)
      ? headings[resourceType]
      : headings.default;
    data.externalLink = /^https?:\/\//i.test(data.externalUri ?? '')
      ? data.externalUri
      : undefined;
  },
  template: `
    <div class="esbHeading">
      <h{{hl}}>{{heading}}</h{{hl}}>
    </div>

    <div class="esbMainContent">
      <p>{{nls "externalResource.externalResourceLink"}}
        {{#if externalLink}}
          <a href="{{externalLink}}" class="esbExtLink"
            target="_blank" rel="noopener noreferrer">{{externalLink}}</a>
        {{else if externalUri}}
          <span class="esbRefText">{{externalUri}}</span>
        {{/if}}</p>
    </div>
  `,
};
