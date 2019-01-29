import Vue from 'vue'
import Vuex from 'vuex'


import user from './user';
import tag from './tag';
import category from './category';

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions : {
    nuxtServerInit (store, { req }) {
      let initFetchData = [
        store.dispatch('tag/getAllTags'),
        store.dispatch('category/getAllCategories')
      ]

      return Promise.all(initFetchData)
    }
  },
  modules: {
    user,
    tag,
    category
  }
})

export default store