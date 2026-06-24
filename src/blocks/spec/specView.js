export default {
  extends: 'template',
  hl: '1',
  introducedLimit: 5,
  reusedLimit: 3,
  template: `
    <div>{{specHeader hl="inherit"}}</div>
    <main>{{
      specMain
      hl=(hinc)
      introducedLimit='inherit'
      reusedLimit='inherit'
      }}</main>
    <aside class="esbAside">
      <div>{{specVanity}}</div>
      <div>{{specInfobox hl=(hinc)}}</div>
    </aside>
  `
};