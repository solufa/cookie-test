import { Plugin } from '@nuxt/types'
import axios from 'axios'
import aspida from '@aspida/axios'
import api, { ApiInstance } from '~/server/api/$api'
import api2, { ApiInstance as Api2Instance } from '~/server2/api/$api'

declare module '@nuxt/types' {
  interface Context {
    $api: ApiInstance
    $api2: Api2Instance
  }
  interface NuxtAppOptions {
    $api: ApiInstance
    $api2: Api2Instance
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: ApiInstance
    $api2: Api2Instance
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: ApiInstance
    $api2: Api2Instance
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $api: ApiInstance
    $api2: Api2Instance
  }
}

const plugin: Plugin = (_, inject) => {
  inject('api', api(aspida(axios, { withCredentials: true })))
  inject('api2', api2(aspida(axios, { withCredentials: true })))
}

export default plugin
