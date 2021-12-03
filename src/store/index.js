// index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  errors: {},
  hasNightMood: false,
  lightDarkClasses: {
    whitetextColorInDark: { dark: 'text-white', light: 'text-dark' },
    whiteBgWithOpacityInDark: { dark: 'bg-white-with-opacity', light: 'bg-black-with-opacity' },
    whitebgWithDarkTextInDark: { dark: 'bg-white  text-dark', light: 'bg-dark text-white' },
    darkTextInDark: { dark: 'text-dark', light: 'text-white' },
    whiteBgWithWhiteTextInDark: { dark: 'bg-white text-white', light: 'bg-dark text-dark' },
    whiteBorderBottomInDark: { dark: 'white-bottom-border', light: 'dark-bottom-border' },
    whiteBgInDark: { dark: 'bg-white', light: 'bg-dark' },
    darkBgInDark: { dark: 'bg-white', light: 'bg-dark' },
    lightBlueLinkInDark: { dark: 'light-blue', light: 'blue' }
  }
}

const getters = {
  toggleWhiteTextColorForNightMood () {
    return state.hasNightMood ? 'text-white' : 'text-dark'
  },
  togglebgWithOpacity () {
    return state.hasNightMood ? 'bg-white-with-opacity' : 'bg-black-with-opacity'
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
  },
  getTheme () {
    return state.hasNightMood ? 'dark' : 'light'
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
