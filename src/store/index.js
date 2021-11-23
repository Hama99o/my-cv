//index.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


const state = {
  errors:  {},
  hasNightMood: false
}

const getters = {
  toggleTextColorForNightMood ()  {
    return state.hasNightMood ? 'text-white' : 'text-dark'
  },
  bgnightmodeClass () {
    return state.hasNightMood ? 'bg-white  text-dark' : 'bg-dark text-white'
  },
  textClass () {
    return state.hasNightMood ? 'text-dark' : 'text-white'
  },
  textAndBgSameClass () {
    return state.hasNightMood ? 'bg-white text-white' : 'bg-dark text-dark'
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