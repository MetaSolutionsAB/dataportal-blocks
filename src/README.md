# Blocks source

Scaffolded by `blocks-bundler create`. Files in this directory:

- `config.js` — default-exported object spread into the bundle.
- `collections.js` — default-exported array attached as `collections:`.
- `nls.js` — default-exported object attached as `nls:`.
- `style.css` — read as a string and attached as `style:`.
- `blocks/` — one file per block; filename (without `.js`) is the
  block name. Subdirectories are organisation only.
  Non-`.js` files (READMEs, notes, fixtures) are
  ignored by the bundler.

## Domain structure

Most of `blocks/` is organised into parallel **families**, each rendering one
kind of RDF resource. The families share the same composite shape and lean on
shared pieces in `common/`:

| Directory      | Renders                                                                         |
| -------------- | ------------------------------------------------------------------------------- |
| `terminology/` | a Terminology detail page (SKOS `ConceptScheme`, containing concepts)           |
| `concept/`     | a Concept detail page (SKOS `Concept`)                                          |
| `datavoc/`     | a Data Vocabulary detail page (OWL `Ontology`, containing classes/properties)   |
| `class/`       | a Class detail page (RDFS `Class`)                                              |
| `property/`    | a Property detail page (RDF `Property`)                                         |
| `spec/`        | a Specification detail page (DCTERMS `Standard` or PROF `Profile`)              |
| `ap/`          | an Application Profile — has an `apView`, but not the rest of the shape (below) |
| `search/`      | per-family search lists — for testing (see below)                               |

Each family (the first six rows above) is built from a consistent set of blocks
named after the family:

- `*View` — the top-level composite. It lays out `*Header` + `*Main` + an
  `aside` containing `*Infobox` and, where available, `*Vanity`.
- `*Header` — the page header (title, type badge, organisation link, …).
- `*Main` — the content column: description, lists, and spec-usage sections.
- `*Infobox` — the aside's metadata box (resource URI, rdf download links, …).
- `*Vanity` — an aside stat panel showing a count from a sub-query. **Not every
  family has one** — `concept/` omits it (a `conceptView` aside holds only the
  infobox).

### The `<dl>` shape

Every `<dl>` in `blocks/` wraps its rows in a `<div>`, one per name-value group —
the `*Infobox` metadata boxes and `spec/resourceDescriptors`'
`esbResourcesFeatures` lists. The sole exception is `ap/apHeaderMetadata*`, whose
markup follows `rdforms-specs`:

```
<dl>
  <div>
    <dt>{{nls "concept.memberOfTerminology"}}</dt>
    <dd>{{relatedLink relation="skos:inScheme" namedClick="terminology"}}</dd>
  </div>
  <div>{{predicateRefList
    predicate="rdfs:domain"
    dtContent="esb_nls:property.domain"
  }}</div>
</dl>
```

The `<div>` grouping is not decoration. A predicate with several values should
render as one `<dt>` followed by several `<dd>`s, which is what `predicateRefList`
emits — and it can only emit them as real siblings if it renders _in place of_ its
own placeholder. The runtime does that only when the placeholder is the sole child
of its parent (otherwise the block renders inside the placeholder `<span>`, which
would leave `<span><dd>…</dd></span>` inside the `<dl>`). So the block needs a
`<div>` of its own to take over, and it has to emit the `<dt>` itself rather than
accept one from the caller. Since a `<dl>` may not mix bare `dt`/`dd` groups with
`div` groups, every row of that `<dl>` is grouped, not just the generated ones.

**The footgun:** whitespace counts as a child node. Write
`<div>{{predicateRefList …}}</div>` with the newlines _inside_ the `{{ }}`, as
above. A line break between `<div>` and `{{` silently gives you the wrapper-`span`
markup instead — it still renders, so nothing complains.

Consumers styling a row therefore need `dl > div > dt`, not `dl > dt`. The grouping
also gives each row a wrapper that can be styled as a unit.

### Two entrypoints per family

With the sole exception of `ap/` (below), each family supports **two ways of
being mounted on a page**:

1. **Mount the `*View` composite** — e.g. `<div data-entryscape="terminologyView">`.
   The view arranges header, main and aside for you. This is what the
   `demo/*.html` pages do.
2. **Mount the parts directly** — mount `*Header`, `*Main`, `*Infobox` and
   `*Vanity` (when the family has one) as separate blocks and lay them out in the
   host page's own markup. Use this when the surrounding page needs control over
   the layout rather than accepting the `*View` arrangement.

Both entrypoints are supported and expected; a downstream integration may choose
either, per page.

For `spec/` there are two additional blocks provided for direct access:

- `specInspectAPButton` — the button to navigate to the Application Profile page.
  Renders nothing unless the spec conforms to `inspec:PROF` and has an AP resource
  descriptor.
- `diagramImage` — an `<img>` element showing the specification diagram.

### Directories outside the `*View` shape

Two directories deliberately do **not** follow the family/`*View` shape:

- **`ap/`** — Application Profile blocks. An AP is rendered primarily by the
  external `rdforms-specs` library (bootstrapped via `loadAp` → `initSpec`), so
  most of the markup and layout are governed by that renderer rather than by the
  blocks defined here. There is a single entrypoint, `apView`, and no
  two-entrypoint choice — the blocks it composes are internal, and the family
  has no `apMain`, `apInfobox` or `apVanity`. For how to mount it see
  `demo/ap.html`.

  `apView` emits the whole page — the `rdforms-specs` root, the header, the
  diagram, and the two elements the renderer fills — so a host page provides
  nothing but the mount node:

  ```html
  <div data-entryscape="apView"></div>
  ```

  | Param                         | Default                 | Effect                                              |
  | ----------------------------- | ----------------------- | --------------------------------------------------- |
  | `data-entryscape-hl`          | `1`                     | heading level of the title                          |
  | `data-entryscape-stand-alone` | `false`                 | show the back-to-specification link                 |
  | `data-entryscape-toc-id`      | `rdforms-specs-toc`     | id of the element filled with the table of contents |
  | `data-entryscape-content-id`  | `rdforms-specs-content` | id of the element filled with the specification     |

  Three things about the resulting DOM, which matter to anything selecting into
  it:

  - The renderer **replaces the entire contents** of the two id-named elements,
    and **overwrites the TOC element's id with `toc`** — that is what its own
    stylesheet and TOC controls look up, so the id passed in survives only until
    `loadAp` runs. The page must not carry another `#toc`.
  - The composite's root carries the **`rdforms-specs`** class, on which the
    renderer toggles `toc-sidebar`/`toc-inline`, and into which it prepends its
    sidebar toggle.
  - The description is rendered into a `<section>` that the renderer then moves
    into its own introduction slot, so `apDescription` ends up inside the
    renderer's markup rather than where `apView` emits it.

- **`search/`** — one `*SearchList` block per family (`terminologySearchList`,
  `conceptSearchList`, `specSearchList`, …). **These exist for testing
  purposes**: they provide listing pages (`demo/index.html`) used to locate
  entries while developing and exercising the other families, not as a shipped
  feature of the portal.

## Click routes

Templates never write a URL. A row or button names a route with
`namedclick="…"`, and `config.clicks` maps that name to the host's own URL. The
values ship empty in `src/config.js`, so **every route a mounted block names has
to be filled in by the host**; an unfilled one yields a link with no target,
which the block still renders. `ap/initSpec.js` reads the same map directly to
wire the AP renderer's click-through, so a route can be wanted from outside a
`namedclick` too.

| Route            | Page it should reach                              |
| ---------------- | ------------------------------------------------- |
| `spec`           | a specification                                   |
| `organization`   | a publishing organisation                         |
| `concept`        | a concept                                         |
| `terminology`    | a terminology                                     |
| `class`          | a class                                           |
| `property`       | a property                                        |
| `datavoc`        | a data vocabulary                                 |
| `ap`             | a specification's application profile             |
| `dataset`        | a dataset                                         |
| `shape`          | reserved for linking between application profiles |
| `conceptSearch`  | concept search, filtered on one terminology       |
| `classSearch`    | class search, filtered on one data vocabulary     |
| `propertySearch` | property search, filtered on one data vocabulary  |

The three `*Search` routes are where `showAllLink` sends a reader for the rows a
truncated list held back, so each has to arrive **filtered on the resource the
page is about**. To leave the encoding of that filter to the host, a route may be
written as a template over the page entry by prefixing it `esb:`, where `${uri}`
expands to the entry's resource URI:

```js
conceptSearch: 'esb:/begrepp?f=${uri}&rt=term_concept',
```

## Introduced CSS classes

Templates emit `esb`-prefixed classes (the EntryScape Blocks convention). Only a
handful are styled here in `src/style.css`; the rest are **styling hooks** left
for the host portal's own stylesheet to target.

Styled in `src/style.css`:

| Class                   | Purpose                                                                                      |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| `esbInlineList`         | list laid out inline (separator-joined items)                                                |
| `esbInlineVerticalList` | modifier on `esbInlineList` for a vertical inline layout                                     |
| `esbHeadingInSummary`   | heading (`<hN>`) placed inside a `<summary>` disclosure element                              |
| `esbMultiline`          | text body that preserves its line breaks                                                     |
| `esbRowHead`            | override for the default blocks formatting of list block rows (when not using `layout: raw`) |
| `esbExpandLabel`        | the collapsed-state label of an expand button (hidden once expanded)                         |
| `esbUnexpandLabel`      | the expanded-state label of an expand button (hidden while collapsed)                        |

Styling hooks emitted by templates (styled downstream, not in `style.css`):

| Class                               | Applied to                                                                                           |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `esbAside`                          | the aside column of a `*View`                                                                        |
| `esbDescription`                    | a resource's description / definition text                                                           |
| `esbSummaryWithHeading`             | a `<summary>` toggle that wraps a section heading                                                    |
| `esbResourceUri`                    | the `<dd>` holding a resource's own URI, in the first row of an `*Infobox`                           |
| `esbRdfLinks`                       | the `<dl>` group holding the metadata download links (in `*Infobox`)                                 |
| `esbBadge`                          | base class on every inline badge (from `badge`)                                                      |
| `esbTypeBadge`                      | default badge modifier — a type badge in a header                                                    |
| `esbGrunddataMarker`                | badge modifier marking a "nationell grunddata" spec                                                  |
| `esbResourceTypeBadge`              | badge modifier for a resource descriptor's type badge                                                |
| `esbOrgLink`                        | a link to the publishing organisation                                                                |
| `esbSpecLink`                       | a link to a specification                                                                            |
| `esbDatavocLink`                    | a link to a data vocabulary                                                                          |
| `esbTerminologyLink`                | a link to a terminology                                                                              |
| `esbResourceDescriptors`            | the container listing a specification's resource descriptors                                         |
| `esbSpecPart`                       | the label of a resource descriptor                                                                   |
| `esbResourcesFeatures`              | the `<dl>` of a resource descriptor's features / relations, in both its row and its expanded subject |
| `esbVanity`                         | an aside statistics (vanity) panel                                                                   |
| `esbVanityStatContainer`            | the stat line inside a vanity panel                                                                  |
| `esbVanityNumber`                   | the highlighted count inside a vanity panel                                                          |
| `esbConceptCount`                   | the concept count of a terminology                                                                   |
| `esbConceptsInTerminologyContainer` | container for a terminology's concepts list and its show-all button                                  |
| `esbClassesInDatavocContainer`      | container for a data vocabulary's class list and its show-all button                                 |
| `esbPropertiesInDatavocContainer`   | container for a data vocabulary's property list and its show-all button                              |
| `esbCPInSpecContainer`              | container for one of a specification's class or property lists and its overflow note                 |
| `esbConceptsInConceptContainer`     | container for a concept's broader / narrower / related lists                                         |
| `esbMatchingConceptsContainer`      | container for a concept's matching (cross-terminology) list                                          |
| `esbConceptLink`                    | a link to a concept (list row)                                                                       |
| `esbExternalConceptLink`            | a concept URI that doesn't resolve locally, as a plain link                                          |
| `esbClassLink`                      | a link to a class                                                                                    |
| `esbPropertyLink`                   | a link to a property                                                                                 |
| `esbRefLabel`                       | a predicate value rendered as an RDForms choice label                                                |
| `esbRefText`                        | a predicate value rendered as text: a literal, or a URI that could not be linked                     |
| `esbRefComposite`                   | placeholder for a blank-node predicate value (`owl:unionOf`, `owl:Restriction`)                      |
| `esbExternalRefLink`                | an http(s) predicate value that isn't a portal link, as a plain link                                 |
| `esbExtLink`                        | an inline text link that is expected to leave the portal, opened in a new tab                        |
| `esbOverflowNote`                   | the note saying how many rows a truncated list held back                                             |
| `esbKeywordsList`                   | the `<dl>` group holding a specification's keywords                                                  |
| `esbKeywordToggle`                  | the `<dd>` holding the show-more button for keywords past the limit                                  |
| `esbDiagramImage`                   | an embedded diagram image                                                                            |
| `esbSpecButton`                     | the "return to specification" button in an AP page                                                   |
| `esbLinkButton`                     | a button-styled link that stays within the portal                                                    |
| `esbExtLinkButton`                  | a button linking to an external resource                                                             |
| `esbShowAllLink`                    | the button from a truncated list to that resource kind's filtered search                             |
| `esbInspectAPButton`                | the button that opens the AP page                                                                    |
| `esbRdButton`                       | the button linking to a resource descriptor's artifact                                               |
| `esbRdExpandButton`                 | the button to toggle a resource descriptor row expansion                                             |
| `esbSpecUsageContainer`             | base class on every "used in specifications" list container                                          |
| `esbTerminologySpecUsageContainer`  | modifier: a terminology's "used in specifications" section                                           |
| `esbDatavocSpecUsageContainer`      | modifier: a data vocabulary's "used in specifications" section                                       |
| `esbClassSpecUsageContainer`        | modifier: a class's "used in specifications" section                                                 |
| `esbPropertySpecUsageContainer`     | modifier: a property's "used in specifications" section                                              |

## Next step

Run the bundler from the project root:

```
blocks-bundler
```

The output is written to `dist/blocks.js` (readable IIFE) and
`dist/blocks.min.js` (terser-minified). Load `dist/blocks.js` from your
HTML to get `window.__entryscape_config` populated.
