# Blocks source

Scaffolded by `blocks-bundler create`. Files in this directory:

- `config.js`      — default-exported object spread into the bundle.
- `collections.js` — default-exported array attached as `collections:`.
- `style.css`      — read as a string and attached as `style:`.
- `blocks/`        — one file per block; filename (without `.js`) is the
                       block name. Subdirectories are organisation only.
                       Non-`.js` files (READMEs, notes, fixtures) are
                       ignored by the bundler.

## Next step

Run the bundler from the project root:

```
blocks-bundler
```

The output is written to `dist/blocks.js` (readable IIFE) and
`dist/blocks.min.js` (terser-minified). Load `dist/blocks.js` from your
HTML to get `window.__entryscape_config` populated.
