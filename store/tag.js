
const state = ({
  tags: []
})

const mutations = {
  SET_TAGS (state, data) {
    if (data.errorCode === 0) {
      state.tags = data.result
    }
  },
  ADD_TAG (state, data) {
    if (data.errorCode === 0) {
      state.tags.push({
        id: data.result.id,
        name: data.result.name,
        createdAt: data.result.createdAt
      })
    }
  },
  DELETE_TAG (state, data) {
    if (data.data.errorCode === 0) {
      state.tags.splice(state.tags.findIndex(item => item.id === data.params.id), 1)
    }
  }
}

const actions = {
  async addTag ({commit, state, getters}, params) {
    const data = await this.$axios.post('/api/tag/createTag', params)
    commit('ADD_TAG', data.data)
    return data
  },
  async getAllTags ({commit, state, getters}, params) {
    const data = await this.$axios.get('/api/tag/findAllTags')
    commit('SET_TAGS', data.data)
    return data
  },
  async deleteTag ({commit, state, getters}, params) {
    const data = await this.$axios.post('/api/tag/destroyTag', params)
    commit('DELETE_TAG', {
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
};