
const state = ({
  categories: []
})

const mutations = {
  SET_CATEGORY (state, data) {
    if (data.errorCode === 0) {
      state.categories = data.result
    }
  },
  // admin client
  ADD_CATEGORY (state, data) {
    if (data.errorCode === 0) {
      state.categories.push({
        id: data.result.id,
        name: data.result.name,
        createdAt: data.result.createdAt
      })
    }
  },
  // admin client
  DELETE_CATEGORY (state, data) {
    if (data.data.errorCode === 0) {
      state.categories.splice(state.categories.findIndex(item => item.id === data.params.id), 1)
    }
  }
}

const actions = {
  getAllCategories ({commit, state, getters}, params) {
    return this.$axios.get('/api/category/findAll')
      .then(response => {
        commit('SET_CATEGORY', response.data)
        return Promise.resolve(response)
      })
      .catch(error => {
        return Promise.reject(error)
      })
  },
  // admin client
  addCategory ({commit, state, getters}, params) {
    return this.$axios.post('/api/category/create', params)
      .then(response => {
        commit('ADD_CATEGORY', response.data)
        return Promise.resolve(response)
      })
      .catch(error => {
        return Promise.reject(error)
      })
  },
  // admin client
  deleteCategory ({commit, state, getters}, params) {
    return this.$axios.post('/api/category/destroy', params)
      .then(response => {
        commit('DELETE_CATEGORY', {
          data: response.data,
          params
        })
        return Promise.resolve(response)
      })
      .catch(error => {
        return Promise.reject(error)
      })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}