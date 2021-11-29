// index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  errors: {},
  hasNightMood: false
}

const getters = {
  toggleWhiteTextColorForNightMood () {
    return state.hasNightMood ? 'text-white' : 'text-dark'
  },
  toggleWhitebgAndDarkTextClass () {
    return state.hasNightMood ? 'bg-white  text-dark' : 'bg-dark text-white'
  },
  toggleDarkTextColorForNightMood () {
    return state.hasNightMood ? 'text-dark' : 'text-white'
  },
  toggleSameTextColorAndBgClass () {
    return state.hasNightMood ? 'bg-white text-white' : 'bg-dark text-dark'
  },
  toggleBorderBottomBgColor () {
    return state.hasNightMood ? 'white-bottom-border' : 'dark-bottom-border'
  },
  groundBgClass () {
    return state.hasNightMood ? 'bg-white' : 'bg-dark'
  },
  bgDarkIfHasNightMood () {
    return state.hasNightMood ? 'bg-dark' : 'bg-white'
  }
}

const mutations = {
}

const actions = {
}
export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
