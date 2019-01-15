
const state = ({
  tags: []
})

const mutations = {
  SET_TAGS (state, data) {
    if (data.errorCode === 0) {
      state.tags = data.result
    }
  },
  // admin client
  ADD_TAG (state, data) {
    if (data.errorCode === 0) {
      state.tags.push({
        id: data.result.id,
        name: data.result.name,
        createdAt: data.result.createdAt
      })
    }
  },
  // admin client
  DELETE_TAG (state, data) {
    if (data.data.errorCode === 0) {
      state.tags.splice(state.tags.findIndex(item => item.id === data.params.id), 1)
    }
  }
}

const actions = {
  getAllTags ({commit, state, getters}, params) {
    return this.$axios.get('/api/tag/findAllTags')
    .then(response => {
      commit('SET_TAGS', response.data)
      return Promise.resolve(response)
    })
    .catch(error => {
      return Promise.reject(error)
    })
  },
  // admin client
  addTag ({commit, state, getters}, params) {
    return this.$axios.post('/api/tag/createTag', params)
    .then(response => {
      commit('ADD_TAG', response.data)
      return Promise.resolve(response)
    })
    .catch(error => {
      return Promise.reject(error)
    })
  },
  // admin client
  deleteTag ({commit, state, getters}, params) {
    return this.$axios.post('/api/tag/destroyTag', params)
      .then(response => {
        commit('DELETE_TAG', {
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
};