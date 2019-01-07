const state = ({

})

const mutations = {

}

const actions = {
  async register ({commit, state, getters}, params) {
    const { data } = await this.$axios.post('/api/user/register', params)
    return data
  },
  async verify ({commit, state, getters}, params) {
    const { data } = await this.$axios.post('/api/user/verify', params)
    return data
  },
  async signin ({commit, state, getters}, params) {
    const { data } = await this.$axios.post('/api/user/signin', params)
    return data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}