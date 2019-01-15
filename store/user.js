const state = ({

})

const mutations = {

}

const actions = {
  register ({commit, state, getters}, params) {
    return this.$axios.post('/api/user/register', params)
    .then(response => {
      return Promise.resolve(response)
    })
    .catch(error => {
      return Promise.reject(error)
    })
  },
  verify ({commit, state, getters}, params) {
    return this.$axios.post('/api/user/verify', params)
    .then(response => {
      return Promise.resolve(response)
    })
    .catch(error => {
      return Promise.reject(error)
    })
  },
  signin ({commit, state, getters}, params) {
    return this.$axios.post('/api/user/signin', params)
    .then(response => {
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