import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Nuxt telemetry (https://nuxtjs.org/api/configuration-telemetry)
  telemetry: false,

  router: {
    base: process.env.NODE_ENV === 'production' ? '/cookie-test/' : '/'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/styles/settings.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/api', '~/plugins/$path'],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/composition-api/module',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loaders: {
      css: { modules: true }
    }
  }
}

export default config
