import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: 'anova f56-a83cf3cd7b0',
    secret: 'np1ht2mjkf',
    status: {},
    loading: false
  },
  getters: {
    id (state) {
      return state.id
    },
    secret (state) {
      return state.secret
    },
    status (state) {
      return state.status
    },
    currentJob (state) {
      return state.status.current_job
    },
    targetTemp (state) {
      return state.status.target_temp
    },
    currentTemp (state) {
      return state.status.current_temp
    },
    isTimerRunning (state) {
      return state.status.is_timer_running
    },
    loading (state) {
      return state.loading
    }
  },
  mutations: {
    setId (state, id) {
      state.id = id
    },
    setSecret (state, secret) {
      state.secret = secret
    },
    setStatus (state, status) {
      state.status = status
    },
    setTargetTemp (state, targetTemp) {
      state.status.target_temp = targetTemp
    },
    setLoading (state, loading) {
      state.loading = loading
    }
  },
  actions: {
    setId ({ commit }, id) {
      commit('setId', id)
    },
    setSecret ({ commit }, secret) {
      commit('setSecret', secret)
    },
    setStatus ({ commit }, status) {
      commit('setStatus', status)
    },
    setTargetTemp ({ commit }, targetTemp) {
      commit('setTargetTemp', targetTemp)
    },
    setLoading ({ commit }, loading) {
      commit('setLoading', loading)
    }
  }
})
