import Vue from 'vue'
import Vuex from 'vuex'


import tag from './tag';

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
  },
  mutations: {
  },
  modules: {
    tag
  }
})

export default store