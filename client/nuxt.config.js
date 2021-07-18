export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'artilingo',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
    'nuxt-windicss',
  ],

  axios: {
    credentials: true,
    baseURL: process.env.API_URL,
  },
  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700, 800],
    },
    display: 'swap',
    preconnect: true,
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      home: '/articles'
    },
    strategies: {
      local: {
        token: {
          property: 'accessToken',
          maxAge: 8640000,
          global: 'true',
          type: 'Bearer',
        },
        user: {
          property: 'user',
        },
        endpoints: {
          login: { url: '/api/v1/user/signin', method: 'post', propertyName: 'accessToken'},
          user: { url: '/api/v1/user', method: 'get' }
        }
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/markdownit'
  ],

  markdownit: {
    preset: 'default',
    linkify: false,
    breaks: true,
    runtime: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
