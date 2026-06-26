export default {
  extends: 'template',
  hl: '1',
  broaderConceptLimit: 5,
  narrowerConceptLimit: 5,
  relatedConceptLimit: 5,
  matchingConceptLimit: 5,
  template: `
      <div>{{conceptHeader hl="inherit"}}</div>
      <main>{{
        conceptMain
        hl=(hinc)
        broaderConceptLimit="inherit"
        narrowerConceptLimit="inherit"
        relatedConceptLimit="inherit"
        matchingConceptLimit="inherit"
        }}</main>
      <aside class="esbAside">
        <div>{{conceptInfobox hl=(hinc)}}</div>
      </aside>
    `
};