export default {
  extends: 'template',
  hl: '1',
  specUsageLimit: 5,
  template: `
      <div>{{classHeader hl="inherit"}}</div>
      <main>{{
        classMain
        hl=(hinc)
        specUsageLimit="inherit"
        }}</main>
      <aside class="esbAside">
        <div>{{classInfobox hl=(hinc)}}</div>
        <div>{{classVanity}}</div>
      </aside>
    `
};