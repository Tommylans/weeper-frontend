export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'weeper',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/main.css',
    '@/assets/css/global.scss',
    'normalize.css',
    '@/assets/css/inputs.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-formulate',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/fontawesome',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dayjs',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // DayJS module configuration (https://www.npmjs.com/package/@nuxtjs/dayjs)
  dayjs: {
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
    plugins: [
      'isoWeek',
      'isToday',
    ] // Your Day.js plugin
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  //fontawesome icons
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    }
  },
  server: {
    host:'0.0.0.0'
  }

}
