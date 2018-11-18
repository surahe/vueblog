import Vue from 'vue'
import Vuex from 'vuex'


import tag from './tag';
import category from './category';

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
  },
  mutations: {
  },
  modules: {
    tag,
    category
  }
})

export default store