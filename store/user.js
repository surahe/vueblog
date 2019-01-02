const state = ({

})

const mutations = {

}

const actions = {
  async login ({commit, state, getters}, params) {
    const { data } = await this.$axios.post('/api/user/login', params)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}