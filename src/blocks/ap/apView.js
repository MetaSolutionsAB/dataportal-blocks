/**
 * Top-level AP page composite (mounted via `data-entryscape="apView"`).
 *
 * Params:
 * - `hl` ('1') — base heading level.
 * - `tocId` ('rdforms-specs-toc') / `contentId` ('rdforms-specs-content') — ids
 *   of the elements the rdforms-specs renderer fills; emitted here and passed
 *   on to `loadAp`, so the two always agree.
 * - `standAlone` (false) — toggle to show the back to spec button.
 *
 * CSS: the composite's root carries `rdforms-specs`, which the renderer's own
 * stylesheet keys off and toggles `toc-sidebar`/`toc-inline` on.
 */
export default {
  extends: 'template',
  hl: '1',
  tocId: 'rdforms-specs-toc',
  contentId: 'rdforms-specs-content',
  standAlone: false,
  template: `
    <div class="h-entry rdforms-specs">
      <div>{{loadAp tocId=tocId contentId=contentId}}</div>
      <div class="head">
        {{#if this.standAlone}}{{apToSpecButton}}{{/if}}
        <h{{hl}} class="title">{{apTitle}}</h{{hl}}>
        <p class="specState">
          {{apStatus}}{{apDate}}
        </p>
        <div>{{apHeaderMetadata}}</div>
        <hr title="separator" />
      </div>
      <div>{{diagramImage}}</div>
      <nav id="{{tocId}}"></nav>
      <div id="{{contentId}}">
        <section>{{apDescription}}</section>
      </div>
    </div>
    `,
};
