export default {
  extends: 'template',
  hl: '1',
  specUsageLimit: 5,
  template: `
      <div>{{propertyHeader hl="inherit"}}</div>
      <main>{{
        propertyMain
        hl=(hinc)
        specUsageLimit="inherit"
        }}</main>
      <aside class="esbAside">
        <div>{{propertyInfobox hl=(hinc)}}</div>
        <div>{{propertyVanity}}</div>
      </aside>
    `
};