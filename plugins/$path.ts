import type { Plugin } from '@nuxt/types'

type OptionalQuery0 = {
  search?: string
}

export const pagesPath = {
  article: {
    _id: (id?: string | number) => ({
      $url: (url?: { hash?: string }) => ({ path: `/article${id !== undefined ? `/${id}` : ''}`, hash: url?.hash })
    }),
    $url: (url?: { query?: OptionalQuery0, hash?: string }) => ({ path: '/article', query: url?.query as any, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ path: '/', hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  favicon_png: '/favicon.png'
} as const

export type StaticPath = typeof staticPath

declare module 'vue/types/vue' {
  interface Vue {
    $pagesPath: PagesPath
    $staticPath: StaticPath
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $pagesPath: PagesPath
    $staticPath: StaticPath
  }

  interface Context {
    $pagesPath: PagesPath
    $staticPath: StaticPath
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $pagesPath: PagesPath
    $staticPath: StaticPath
  }
}

const pathPlugin: Plugin = (_, inject) => {
  inject('pagesPath', pagesPath)
  inject('staticPath', staticPath)
}

export default pathPlugin
