# Changelog

All notable changes to this blocks bundle, from the perspective of a consumer
embedding it: what renders differently, which DOM shapes and `esb*` classes
downstream CSS selectors can rely on, and which NLS keys and block params moved.

The block-level detail behind each entry lives in `src/README.md` and the block
docstrings.

## 0.5.2 — 2026-09-01

Requires rdforms-specs 1.7.0 or later: the application profile page now renders
into an element it hands the renderer rather than into the page's own `<main>`.
Nothing here changes a DOM shape or an `esb*` class, and no block or parameter is
renamed or removed.

### Added

- **A new block**, `apView`: the whole application profile page as one mount
  point, `<div data-entryscape="apView">` — the `rdforms-specs` root, the header,
  the diagram, and the two elements the renderer fills. Parameters: `hl` (heading
  level of the title, default `1`), `standAlone` (show the back-to-specification
  link, default `false`), `tocId` and `contentId` (ids of the elements the
  renderer fills, defaulting to `rdforms-specs-toc` and `rdforms-specs-content`).

### Changed

- **`apView` is the application profile page's entrypoint.** The page was
  assembled in the host's own markup — `loadAp` alongside `apTitle`, `apStatus`,
  `apDate`, `apHeaderMetadata`, `apToSpecButton` and `diagramImage`, with the page
  supplying a `<nav>` and a `<main>`. Those blocks still render, but they are
  internal now, and the family stops at `apView`: there is no `apMain`,
  `apInfobox` or `apVanity`.
- **The renderer is told which elements to fill**, rather than taking the first
  `<nav>` and the first `<main>` in the document — which on a page carrying its
  own site navigation took that over instead. A page mounted the 0.5.1 way is
  unaffected: with nothing matching the ids, the renderer still falls back to
  searching by tag.

### Fixed

- **The application profile page follows the page language.** It read
  `document.targetLanguage`, a global the page had to set for itself; it now uses
  the language the runtime resolved from `page_language`, like every other block.
- **Its click-through links use the merged `clicks`.** They resolved against the
  first configuration object that declared a `clicks` map, ignoring every later
  contribution and the `!clicks` replacement convention; they now use the same
  merged map `namedclick` resolves against.
- **Its "usage note" label is translatable.** It was a fixed English/Swedish pair
  inside the bundle; it is `ap.usageNote` in `config.nls` now.

## 0.5.1 — 2026-09-01

### Changed

- **Every disclosure on the specification page starts open.** The "Reused" section
  was the one `<details>` left closed; it now carries `open` like the other three. A
  host relying on `details:not([open])` to reach it needs re-checking.

### Fixed

- **A page's parent link requires the parent to be of the expected type.** The
  concept page now requires its terminology (`skos:inScheme`) to be a
  `skos:ConceptScheme`, and the class and property pages their data vocabulary
  (`rdfs:isDefinedBy`) to be an `owl:Ontology` — in the header and in the infobox.
  The relation resolves by target URI, and a resource descriptor may share its URI
  with the subject it describes, so the link could resolve the RD describing the
  terminology or data vocabulary instead: wrong label, wrong target.
- **The "Explore the AP" button is gated on the specification itself.** It rendered
  whenever the spec had an application-profile resource descriptor, so a
  specification that is not an `inspec:PROF` but tagged its AP resource
  `inspec:SHACL` still got a button. The specification itself must now conform to
  `inspec:PROF` as well.

## 0.5.0 — 2026-08-28

### Breaking: DOM changes that affect downstream selectors

#### Metadata download links are a row of the infobox `<dl>`, not a list beside it

The links sat after the `<dl>`, under their own heading, in an inline list:
`<h3>` plus `<div class="esbRdfLinks esbInlineList esbInlineVerticalList">` holding
four links, each still wrapped in its placeholder `<span>`. They are now a row
_inside_ the `<dl>`, in the shape `predicateRefList` and `resourceUriRow` already
use: `<div class="esbRdfLinks">` containing a `<dt>` and one `<dd>` per
serialisation, each `<dd>` holding a bare `<a>`.

Four consequences for selectors. `esbRdfLinks` keeps its name but no longer carries
`esbInlineList esbInlineVerticalList`, and now marks a `<dl>` row group rather than
an inline list. The per-link placeholder `<span>`s are gone, since each `rdfLink`
is the sole child of its `<dd>` and mounts into it. The heading is gone from the
page outline — it is a `<dt>` now, and `<dt>` may not contain heading content, so
there is no markup-valid way to keep both the row and the heading. And on the
specification page the second `<dl>`, which was gated on
`adms:last,adms:prev,adms:next`, now renders unconditionally because it hosts this
row.

`rdfLinkList` loses its `hl` parameter accordingly; the six infoboxes no longer
pass `hl=(hinc)` to it.

#### The `rdfLinks` block is renamed `rdfLinkList`

Block names are global at runtime and are shared with the other bundles the host
page loads. dataportal.se also loads the opendata extension, which defines its own
unrelated `rdfLinks` (a DCAT-recursive download list), so on a page loading both,
one silently replaced the other. Mounting `data-entryscape="rdfLinks"` no longer
reaches this bundle's block. The emitted `esbRdfLinks` class is unaffected by the
rename.

#### The concept page's broader / narrower / related sections are no longer disclosures

Each was a `<details open>` whose `<summary class="esbSummaryWithHeading">` carried
the section heading. Each is now a plain heading followed by its
`esbConceptsInConceptContainer`, so that container is a sibling of the heading
rather than a child of `<details>`, and those three sections no longer emit
`esbSummaryWithHeading`. The matching-concepts section keeps its disclosure, as do
the terminology, data vocabulary and specification pages.

#### `esbHeadingInSummary` is emitted only on headings inside a `<summary>`

The class was left on eight headings that are not in a `<summary>`: the concept
page's alternative-labels, broader, narrower and related headings, and the
"introduced in" / "reused in" headings on both the class and property pages. A host
styling `.esbHeadingInSummary` to reach those section headings needs a different
selector. The twelve headings that really are inside a `<summary>` are unchanged.

### Fixed

- **Standalone section headings get their block layout back.** `src/style.css` gives
  `.esbHeadingInSummary` `display: inline`, which is what lets a heading sit beside
  a disclosure triangle. On the eight headings above it collapsed the `<hN>` to an
  inline box, dropping its default vertical margins — with no other heading rules in
  play, that was the whole of their spacing.

## 0.4.0 — 2026-08-27

### Breaking: DOM changes that affect downstream selectors

#### A resource's own URI is a link, not a `<code>` element

The first row of every `*Infobox` rendered `<dd><code>{{resourceURI}}</code></dd>`.
It now renders the URI as a link opening in a new tab, emitted by a new shared
`resourceUriRow` block: `<dd class="esbResourceUri"><a class="esbExtLink" …>`. The
`<code>` element is gone, so a selector reaching for it — or code relying on the
browser's default monospacing — needs `.esbResourceUri` instead. The link is not
assumed to stay within the portal.

#### The parent terminology or data vocabulary is linked from the header

Concept, class and property pages now link their parent from the page header: a
concept its terminology (`skos:inScheme`, `esbTerminologyLink`), a class or property
its data vocabulary (`rdfs:isDefinedBy`, `esbDatavocLink`). The `<br/>` that
separated the publisher link from the type badge in `header` is dropped along with
it, so a host that positioned the badge off that line break needs its own rule.
`specHeader` has its own template and is unaffected.

#### Link hooks from `relatedLink` sit on the `<a>`, not on a wrapper

`relatedLink`'s `class` parameter is renamed `linkClass` and reaches the anchor
rather than the wrapping element. `esbTerminologyLink`, `esbDatavocLink` and
`esbSpecLink` previously landed twice — on the `<dd>` (or the mount `<span>`) and on
the `<a>` within it — doubling any `::after` icon or boxed styling built on them.
Each appears once now, on the `<a>`, as `esbOrgLink`, `esbClassLink` and
`esbConceptLink` already did. A selector matching the wrapper (`dd.esbDatavocLink`)
has to move to the anchor. `apRelated`'s microformats `u-url` moves with it, onto
the element carrying the `href`, where a parser expects it.

#### A resource descriptor's "Role" label is visually hidden

The `<dt>` for `prof:hasRole` in the `esbResourcesFeatures` list carries `sr-only`,
keeping the label for screen readers without showing it. The bundle does not define
`.sr-only`; the host stylesheet has to, as it already must for the runtime's own
live regions and for this block's expand-button label.

### Breaking: `specMain` no longer renders the diagram and AP button

`specMain` opened with `diagramImage` and `specInspectAPButton`. Both now sit behind
a new `standAlone` parameter, default `false`, so a page that wants them has to ask:
`standAlone="true"` on `specMain`, or on `specView`, which forwards it. This lets a
host lay the two blocks out itself — `demo/ap.html` already mounts `diagramImage`
directly — but a host mounting `specView` and expecting the previous output has to
set the parameter.

### Added

- **A new block**, `resourceUriRow`: the shared first row of every `*Infobox`,
  taking the `<dt>` wording as `dtContent`.
- **New `esb*` classes**: `esbResourceUri`, `esbExtLink` and `esbTerminologyLink`.
  All three are described in the README.
- **A new parameter**, `standAlone`, on `specMain` and `specView` (above).

### Removed

- **`relatedLink`'s `class` parameter**, renamed `linkClass` (above). At a mount
  point that is `data-entryscape-link-class`.

### Fixed

- **The concept infobox's terminology link carries an `esb*` class.** It emitted a
  bare `terminologyLink`, outside the convention and undocumented; it is
  `esbTerminologyLink` now, the class the header's parent link also uses.

## 0.3.0 — 2026-08-26

**Requires an EntryScape Blocks runtime later than 1.18.1.** The inline lists are
built from the `list` block's `entries` parameter (BLOCKS-453).

### Breaking: DOM changes that affect downstream selectors

#### Block-level blocks no longer render inside a placeholder `<span>`

Where a block emitting block-level content was invoked alongside siblings, the
runtime kept its placeholder `<span>` and rendered into it, nesting `<div>`s in a
`<span>`. Each such invocation now sits in a bare `<div>` that the runtime renders
into instead. Affected: `rdfLinks` in all six infoboxes (`.esbRdfLinks` is now the
child of a plain `<div>`, not of a `<span>`), the four "used in specifications"
lists, the specification's resource-descriptor lists and its rdforms `{{view}}`,
and the concept page's mapping sections. Any selector that stepped through the
span, or used a child combinator from the enclosing section, needs re-checking.

#### The inline lists truncate instead of paginating

The terminology concept list, the data vocabulary class and property lists, the
concept broader / narrower / related and mapping lists, and the specification
class and property lists are all capped at `limit` and no longer show pagination
controls. Rows past the cap are not reachable from the list itself; a show-all
button (terminology, data vocabulary) or an overflow note (concept, specification)
accounts for them instead.

#### A specification's classes and properties are four sections, not two

"Introduced" and "Reused" each split into a class section and a property
section, with their own headings and counts. Each `<details>` renders only when
the relation actually has targets of that type. A specification introducing only
classes now shows no property section at all. Each list and its overflow note sit
in an `esbCPInSpecContainer`.

#### A terminology's concept section lists every concept

The section followed `skos:topConceptOf` and showed only top-level concepts; it
follows `skos:inScheme` now, so it lists the terminology's concepts and its
heading counts all of them. The now identical concept count in the infobox is
dropped.

#### The class and property pages drop their disclosure around "Reused in"

That section was a `<details>` whose `<summary>` carried a count; it is now a
plain heading followed by the list, so `esbSummaryWithHeading` and the count are
both gone from those two pages. The list itself stacks vertically now
(`esbInlineVerticalList` joins its container's classes) and states when a resource
is used by no interoperable specification instead of rendering an empty container.

#### The AP button is styled as an internal link

`specInspectAPButton` emits `esbLinkButton esbInspectAPButton` in place of
`esbExtLinkButton esbInspectAPButton`. The AP page is inside the portal, so the
off-site affordance a host attaches to `esbExtLinkButton` was wrong there.
`esbExtLinkButton` keeps its meaning and is still what the resource descriptor's
artifact button emits. For the same reason, `esbSpecLink` rows are internal portal
links and should not carry an external-link marker either.

### Added

- **New blocks**: `listTruncated` (the inline list base), `showAllLink`,
  `overflowNote`, `cpInSpecSections` (owns the specification's class and property
  region), the four per-type specification list and header pairs, and
  `conceptInTerminologyList` / `conceptInTerminologyHeader`.
- **New `esb*` classes**: `esbLinkButton`, `esbShowAllLink`, `esbOverflowNote`,
  `esbConceptsInTerminologyContainer`, `esbClassesInDatavocContainer`,
  `esbPropertiesInDatavocContainer`, `esbCPInSpecContainer`. All are described in
  the README.
- **Three new `clicks` routes**, `conceptSearch`, `classSearch`,
  `propertySearch`. All `clicks` are now described in the README.
- **Mapping lists render unresolved URIs.** A concept's SKOS mapping sections list
  local and external values side by side in metadata order; a value that resolves
  to no entry renders as a plain link with `esbExternalConceptLink`, where it was
  previously dropped.
- **Empty sections say so** rather than showing a bare container: the data
  vocabulary's class and property lists, the terminology's concept list, and the
  class and property pages' reuse list each carry a placeholder.

### Removed

- **The `listStandard` and `listShowMore` blocks**, superseded by `listTruncated`.
  Nothing in the bundle referenced them, but HTML mounting either by name via
  `data-entryscape-block` will now render nothing.
- **`topConceptInTerminologyList` / `topConceptInTerminologyHeader`**, renamed as
  `conceptInTerminologyList` / `conceptInTerminologyHeader` accordingly.
- **`cpIntroducedInSpecList` / `cpReusedInSpecList` and their header blocks**,
  replaced by the per-type pairs.
- **`matchingConceptsListFallback`**, no longer needed now that one list renders
  both resolved and unresolved values.
- **The `clicks.vocabulary` route**, which duplicated `property` for some values
  and was unused.
- **The filler paragraphs**, placeholders where content never arrived. Also removed
  the associated `.placeholderParagraph` rule and NLS strings.

### Fixed

- **A type filter on a relation now applies however many targets there are**
  (BLOCKS-323). The runtime resolved a relation's targets with a Solr query up to
  ten values and with a plain load beyond that, and the load dropped `rdftype`, so
  a specification relating to more than ten classes and properties saw the filter
  stop working. Both paths are replaced by one that filters by type whatever the
  count.
- **Empty class and property sections on a specification no longer render.** They
  were gated on the relation, which says nothing about the types of its targets.
- **`<div>`s no longer nest inside `<span>`s** (see above), invalid markup that
  browsers tolerated silently.

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
