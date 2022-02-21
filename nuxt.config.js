export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio-v3',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/portfolio/favicon.ico' },
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.5.0/css/all.css" }
    ],
    script: [
      { src: "/portfolio/bootstrap.bundle.min.js" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: "~/assets/main.scss", lang: 'sass' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  generate: {
    dir: 'docs'
  },

  router: {
    // Set the "Base" of the router.
    // https://router.vuejs.org/en/api/options.html#base
    base: '/portfolio/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    }
  }
}
