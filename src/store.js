import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: 'anova f56-a83cf3cd7b0',
    secret: 'np1ht2mjkf'
  },
  getters: {
    id (state) {
      return state.id
    },
    secret (state) {
      return state.secret
    }
  },
  mutations: {
    setId (state, id) {
      state.id = id
    },
    setSecret (state, secret) {
      state.secret = secret
    }
  },
  actions: {
    setId ({ commit }, id) {
      commit('setId', id)
    },
    seteSecret ({ commit }, secret) {
      commit('setSecret', secret)
    }
  }
})
