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

| Directory      | Renders                                                                       |
| -------------- | ----------------------------------------------------------------------------- |
| `terminology/` | a Terminology detail page (SKOS `ConceptScheme`, containing concepts)         |
| `concept/`     | a Concept detail page (SKOS `Concept`)                                        |
| `datavoc/`     | a Data Vocabulary detail page (OWL `Ontology`, containing classes/properties) |
| `class/`       | a Class detail page (RDFS `Class`)                                            |
| `property/`    | a Property detail page (RDF `Property`)                                       |
| `spec/`        | a Specification detail page (DCTERMS `Standard` or PROF `Profile`)            |
| `ap/`          | an Application Profile — does **not** follow the shared shape (see below)     |
| `search/`      | per-family search lists — for testing (see below)                             |

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

### Directories outside the `*View` shape

Two directories deliberately do **not** follow the family/`*View` shape:

- **`ap/`** — Application Profile blocks. An AP is rendered primarily by the
  external `rdforms-specs` library (bootstrapped via `initSpec`), so the
  markup and layout are governed by that renderer rather than by our composite
  blocks. For an overview on how to mount the `ap/` see
  `demo/ap.html`; there is no `*View` and no two-entrypoint choice.
- **`search/`** — one `*SearchList` block per family (`terminologySearchList`,
  `conceptSearchList`, `specSearchList`, …). **These exist for testing
  purposes**: they provide listing pages (`demo/index.html`) used to locate
  entries while developing and exercising the other families, not as a shipped
  feature of the portal.

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

Styling hooks emitted by templates (styled downstream, not in `style.css`):

| Class                              | Applied to                                                     |
| ---------------------------------- | -------------------------------------------------------------- |
| `esbAside`                         | the aside column of a `*View`                                  |
| `esbDescription`                   | a resource's description / definition text                     |
| `esbSummaryWithHeading`            | a `<summary>` toggle that wraps a section heading              |
| `esbRdfLinks`                      | an inline list of raw RDF property links (in `*Infobox`)       |
| `esbBadge`                         | base class on every inline badge (from `badge`)                |
| `esbTypeBadge`                     | default badge modifier — a type badge in a header              |
| `esbGrunddataMarker`               | badge modifier marking a "nationell grunddata" spec            |
| `esbResourceTypeBadge`             | badge modifier for a resource descriptor's type badge          |
| `esbOrgLink`                       | a link to the publishing organisation                          |
| `esbSpecLink`                      | a link to a specification                                      |
| `esbDatavocLink`                   | a link to a data vocabulary                                    |
| `esbResourceDescriptors`           | the container listing a specification's resource descriptors   |
| `esbSpecPart`                      | the label of a resource descriptor                             |
| `esbResourcesFeatures`             | the `<dl>` of a resource descriptor's features / relations     |
| `esbVanity`                        | an aside statistics (vanity) panel                             |
| `esbVanityStatContainer`           | the stat line inside a vanity panel                            |
| `esbVanityNumber`                  | the highlighted count inside a vanity panel                    |
| `esbConceptCount`                  | the concept count of a terminology                             |
| `esbDiagramImage`                  | an embedded diagram image                                      |
| `esbSpecButton`                    | the "return to specification" button in an AP page             |
| `esbExtLinkButton`                 | a button linking to an external resource                       |
| `esbInspectAPButton`               | the button that opens the AP page                              |
| `esbRdButton`                      | the button linking to a resource descriptor's artifact         |
| `esbSpecUsageContainer`            | base class on every "used in specifications" list container    |
| `esbTerminologySpecUsageContainer` | modifier: a terminology's "used in specifications" section     |
| `esbDatavocSpecUsageContainer`     | modifier: a data vocabulary's "used in specifications" section |
| `esbClassSpecUsageContainer`       | modifier: a class's "used in specifications" section           |
| `esbPropertySpecUsageContainer`    | modifier: a property's "used in specifications" section        |

## Next step

Run the bundler from the project root:

```
blocks-bundler
```

The output is written to `dist/blocks.js` (readable IIFE) and
`dist/blocks.min.js` (terser-minified). Load `dist/blocks.js` from your
HTML to get `window.__entryscape_config` populated.
