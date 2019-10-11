import colors from 'vuetify/es5/util/colors'
import sitemapRoutes from './store/sitemap-routes'

export default {
  mode: 'universal',

  manifest: {
    lang: 'pl',
    name: 'Jakub Gania Software',
    description: '',
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#000000",
    background_color: "#000000"
  },

  /*
   ** Headers of the page
   */
  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    // title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
      }
      // {
      //   rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Audiowide&display=swap'
      // }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'aos/dist/aos.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src:"~/plugins/aos", ssr: false },
    { src: '~plugins/ga.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://jakubgania.io',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    routes: sitemapRoutes
  },

  markdownit: {
    injected: true,
    use: [
      ['markdown-it-meta'],
    ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}