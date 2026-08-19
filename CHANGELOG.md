# Changelog

All notable changes to this blocks bundle, from the perspective of a consumer
embedding it: what renders differently, which DOM shapes and `esb*` classes
downstream CSS selectors can rely on, and which NLS keys and block params moved.

The block-level detail behind each entry lives in `src/README.md` and the block
docstrings.

## 0.2.0 — 2026-08-19

### Breaking: DOM changes that affect downstream selectors

#### Every `<dl>` row is now wrapped in a `<div>`

This applies across the bundle: all the `*Infobox` metadata boxes
(specification, class, property, concept, terminology, data vocabulary) and the
`esbResourcesFeatures` lists in `spec/resourceDescriptors`. Selectors written as
`dl > dt` / `dl > dd` must become `dl > div > dt` / `dl > div > dd`; in exchange,
each row now has an element that can be styled as a unit. The one exception is
`ap/apHeaderMetadata*`, which keeps the flat `rdforms-specs` markup. Why the
grouping is needed is documented under "The `<dl>` shape" in `src/README.md`.

#### Resource descriptor rows (`spec/resourceDescriptors`, on a specification page)

- **The row is split differently between head and expanded area.** The head keeps
  the type badge, title, the role `<dl>` and the artifact button; "Reused from"
  and the subject row have moved into the expanded area, where they now share a
  single `esbResourcesFeatures` `<dl>`. `resourceDescriptorSubject` no longer
  emits a `<dl>` of its own — it emits the `<dt>`/`<dd>` pair into the caller's.
- **Roles render one `<dd>` per value** instead of one `<dd>` with the values
  comma-joined, and the role `<dl>` is omitted entirely when `prof:hasRole` is
  absent (previously an empty `<dd>`).
- **Expansion uses an explicit in-row button** instead of the runtime's chevron
  (`expandButton: false`). The button is
  `<button class="esbExpandButton esbRdExpandButton">` and holds an
  `esbExpandLabel` span, an `esbUnexpandLabel` span and an `sr-only` span naming
  the row. The bundle's `style.css` now ships one functional rule that hides
  whichever label doesn't match `aria-expanded`; the disclosure icon and all
  other styling are left to the host. Consequence: the runtime's `clickExpand`
  behaviour no longer applies to these rows.

#### Infoboxes

- **The specification infobox is now two `<dl>`s**, with the rdforms `{{view}}`
  between them — the URI / profile-of / keywords rows above it, the
  `adms:last` / `adms:prev` / `adms:next` version rows below.
- **The class and property infoboxes no longer render an rdforms `{{view}}`.**
  Their metadata is now explicit rows (see _Added_), so any styling targeting the
  generated rdforms markup on those two pages no longer applies.

#### Metadata download links (`rdfLinks`, in every infobox)

The links are no longer direct children of `.esbRdfLinks`. Each is now its own
`rdfLink` sub-block, so the flex items inside the container are the runtime's
placeholder `<span>`s rather than the `<a>`s. `.esbRdfLinks > a` needs to become
`.esbRdfLinks a`.

#### Descriptions (`description`, on every page)

Renders nothing at all when `dcterms:description` is absent, rather than an empty
element. Layouts relying on that empty element for spacing will see the gap close.

#### "Used in specifications" lists (`specUsageList`)

The list now honours its `vertical` param, adding `esbInlineVerticalList` to the
container class list. The terminology and data vocabulary sections pass
`vertical=true`, so those two stack instead of running inline; the class and
property sections are unchanged.

### Added

- **New `esb*` classes** (all styled downstream unless noted):
  `esbRdExpandButton`, `esbExpandLabel` and `esbUnexpandLabel` (the latter two
  also carry the label-swap rule in `style.css`), `esbClassLink`,
  `esbPropertyLink`, `esbRefLabel`, `esbRefText`, `esbRefComposite`,
  `esbExternalRefLink`, `esbKeywordsList`, `esbKeywordToggle`.
- **Property page**: explicit "Domain", "Range", "Subproperty of" and "See also"
  rows. Values render as portal links where they resolve locally
  (`esbClassLink` / `esbPropertyLink`), as an RDForms choice label
  (`esbRefLabel`) for generic and datatype values such as `rdfs:Literal`, as a
  plain external link (`esbExternalRefLink`) for other http(s) URIs, as text
  (`esbRefText`) for literals, and as a "Composite value" placeholder
  (`esbRefComposite`) for blank-node structures like `owl:unionOf`.
- **Class page**: explicit "Subclass of" and "See also" rows, same value
  rendering.
- **Specification infobox**: a keyword row (`dcat:keyword`). Keywords past
  `keywordLimit` (default 5) are collapsed behind a show-more `<button>` in a
  trailing `<dd class="esbKeywordToggle">`. Collapsed keywords carry
  `hidden="until-found"` and a `data-kw-overflow` attribute, so they stay
  findable by in-page search; the button carries `data-kw-toggle` and
  `aria-expanded`. A keyword whose language differs from the inherited one gets a
  `lang` attribute.
- **Specification infobox**: "Latest version", "Previous version" and "Next
  version" rows (`adms:last` / `adms:prev` / `adms:next`), linking through the
  `spec` route.
- **N-TRIPLES** added to the metadata download links on every page.
- **New params**:
  - `specView` / `specHeader`: `badgeForNonInspec` (default `false`).
  - `specView` / `specInfobox`: `keywordLimit` (default `5`).
  - `rdfLinks` / `rdfLink`: `recursive` — adds `recursive=…` to the download URLs.
  - `keywordList`: `limit`, `labelMore`, `labelLess`.
  - `predicateRefList` (and its `classRefList` / `externalRefList`
    specialisations): `predicate`, `dtContent`, `namedclick`, `choiceItems`,
    `resolve`, `excludeType`, `rowClass`, `labelClass`, `textClass`,
    `compositeClass`, `externalRowClass`.

### Changed

- **The "non-INSPEC" header badge is off by default.** Set
  `badgeForNonInspec="true"` on `specView` / `specHeader` to get the previous
  behaviour.
- **Non-interoperable specifications get a single, unified resource list** rather
  than the "Introduced" / "Reused" disclosure pair, which now renders only for
  specifications conforming to `inspec:PROF`.
- **Vanity-panel wording** on the terminology, data vocabulary, class and
  property pages: "… som använder denna X." → "… använder denna X." (English:
  "… that use this X." → "… use this X.").

### Removed

- **The `relatedSpecList` block.** The specification infobox's "Profile of" row
  now uses `predicateRefList`, which resolves each value individually and can
  render values that don't resolve to a local entry.
- **NLS keys `spec.moreInformation` / `spec.lessInformation`**, replaced by
  `spec.showMore` / `spec.showLess` plus new `general.showMore` /
  `general.showLess`.

### NLS

Consumers overriding the bundled NLS need to re-check these. Two version keys
were renamed _and_ their meanings shifted, so a stale override silently produces
a wrong label:

- `respec.latestVersion` → **`respec.lastVersion`** (`adms:last`).
- `respec.lastVersion` → **`respec.prevVersion`** (`adms:prev`).

New keys: `general.seeAlso`, `general.compositeValue`,
`general.downloadMetadataNTriples`, `general.showMore`, `general.showLess`,
`class.subClassOf`, `property.domain`, `property.range`,
`property.subPropertyOf`, `spec.keyword`, `spec.showMore`, `spec.showLess`.

### Fixed

- **Concept metadata renders again.** `defaultBundles` is back to `true`; the
  `terms.json` template needs the default skos / dcterms / esc bundles for most
  of the item ids it references, and there is no per-bundle selection that would
  let the standalone templates substitute.
- In the new predicate rows, a URI value is only rendered as a link when it is
  http(s), so a `javascript:` or `data:` URI in the (untrusted) metadata cannot
  become a link target — matching the guard the resource descriptor subject
  already had.

## 0.1.0 — 2026-07-06

First tagged version; no changelog was kept for it.
