const state = () => ({
  darkTheme: false
})

const getters = {
  darkTheme: (state) => {
    if (process.browser) {
      if (localStorage.getItem('darkMode') === 'true') {
        state.darkTheme = true
        return state.darkTheme
      }
    }

    return state.darkTheme
  }
}

const actions = {
  toogleDarkThemeValue({ commit }) {
    commit('darkTheme')
  }
}

const mutations = {
  darkTheme(state) {
    if (process.browser) {
      if (localStorage.getItem('darkMode') === 'true') {
        state.darkTheme = !state.darkTheme
        localStorage.setItem('darkMode', false)
      } else {
        localStorage.setItem('darkMode', true)
        state.darkTheme = !state.darkTheme
      }
    }
    // state.darkTheme = !state.darkTheme
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
