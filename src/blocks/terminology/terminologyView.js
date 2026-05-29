export default {
  extends: 'template',
  hl: '1',
  conceptLimit: 5,
  specUsageLimit: 5,
  template: `
      <div>{{terminologyHeader hl="inherit"}}</div>
      <main>{{
        terminologyMain
        hl=(hinc)
        conceptLimit='inherit'
        specUsageLimit='inherit'
        }}</main>
      <aside class="esbAside">
        <div>{{terminologyInfobox hl=(hinc)}}</div>
        <div>{{terminologyVanity}}</div>
      </aside>
    `
};