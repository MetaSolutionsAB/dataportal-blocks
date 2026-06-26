export default {
  extends: 'template',
  hl: '1',
  classLimit: 5,
  propertyLimit: 5,
  specUsageLimit: 5,
  template: `
      <div>{{datavocHeader hl="inherit"}}</div>
      <main>{{
        datavocMain
        hl=(hinc)
        classLimit="inherit"
        propertyLimit="inherit"
        specUsageLimit="inherit"
        }}</main>
      <aside class="esbAside">
        <div>{{datavocInfobox hl=(hinc)}}</div>
        <div>{{datavocVanity}}</div>
      </aside>
    `
};