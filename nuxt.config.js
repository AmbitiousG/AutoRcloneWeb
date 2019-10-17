
export default {
  mode: 'spa',
  server: {
    port: 3001,
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.min.js' },
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.1.3/vue-router.min.js' },
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.12.0/index.js' },
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.12.0/locale/en.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.12.0/theme-chalk/index.css' }
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
    // 'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/sockets'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    // html: {
    //   minify: {
    //     collapseBooleanAttributes: false,
    //     decodeEntities: false,
    //     minifyCSS: false,
    //     minifyJS: false,
    //     processConditionalComments: false,
    //     removeEmptyAttributes: false,
    //     removeRedundantAttributes: false,
    //     trimCustomFragments: false,
    //     useShortDoctype: false
    //   }
    // },
    // analyze: true,
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
        config.externals = {
          // vue: "Vue",
          // "vue-router": "VueRouter"
        };
        
      }
    }
  }
