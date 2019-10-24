// import Vue from 'vue'
import Vuex from 'vuex'
import AxiosDefaultUrl from './axios-set-base-url'

import DarkMode from './modules/dark-mode'

AxiosDefaultUrl.setBaseUrl()

// Vue.use(Vuex)

// export default () =>
//   new Vuex.Store({
//     modules: {
//       DarkMode
//     }
//   })

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      showDarkModeSwitch: false
    }),
    modules: {
      DarkMode
    }
  })
}

export default createStore
