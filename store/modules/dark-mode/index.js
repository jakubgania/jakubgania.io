const state = {
  darkTheme: false
}

const getters = {
  darkTheme: (state) => {
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
    state.darkTheme = !state.darkTheme
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
