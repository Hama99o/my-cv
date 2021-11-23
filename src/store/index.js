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
