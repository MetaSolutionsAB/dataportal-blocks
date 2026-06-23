// todo: getHref should inherit from config.clicks
// todo: usage note string should come from config.nls

export default {
  shacl: '',
  run: function(node, data, items, entry) {
    if (data.shacl) {
      rdforms_specs.init({
        shacl: data.shacl.getResourceURI(),
        getHREF: (uri, type) => {
          switch (type) {
            case 'property':
              return `./property.html?esc_uri=${encodeURIComponent(uri)}`;
            case 'class':
              return `./class.html?esc_uri=${encodeURIComponent(uri)}`;
            case 'spec':
              return `./specification.html?esc_uri=${encodeURIComponent(uri)}`;
            case 'shape':
              return `./ap.html?esc_shape=${encodeURIComponent(uri)}`;
            case 'terminology':
              return `./terminology.html?esc_uri=${encodeURIComponent(uri)}`;
          };
        },
        language: document.targetLanguage,
        extras: {
          usageNote: {
            en: "Usage note",
            sv: "Användningsanmärkning"
          }
        }
      });
    }
  }
};
