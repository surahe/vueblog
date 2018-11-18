
const state = ({
  categories: []
})

const mutations = {
  SET_CATEGORY (state, data) {
    if (data.errorCode === 0) {
      state.categories = data.result
    }
  },
  ADD_CATEGORY (state, data) {
    if (data.errorCode === 0) {
      state.categories.push({
        id: data.result.id,
        name: data.result.name,
        createdAt: data.result.createdAt
      })
    }
  },
  DELETE_CATEGORY (state, data) {
    if (data.data.errorCode === 0) {
      state.categories.splice(state.categories.findIndex(item => item.id === data.params.id), 1)
    }
  }
}

const actions = {
  async addCategory ({commit, state, getters}, params) {
    const data = await this.$axios.post('/api/category/create', params)
    commit('ADD_CATEGORY', data.data)
    return data
  },
  async getAllCategories ({commit, state, getters}, params) {
    const data = await this.$axios.get('/api/category/findAll')
    commit('SET_CATEGORY', data.data)
    return data
  },
  async deleteCategory ({commit, state, getters}, params) {
    const data = await this.$axios.post('/api/category/destroy', params)
    commit('DELETE_CATEGORY', {
      data: data.data,
      params
    })
    return data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}