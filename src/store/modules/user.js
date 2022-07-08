import UserApi from '../../api/user'
import { getItem, setItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', state.token)
    }
  },
  actions: {
    async login({ commit }, paylod) {
      console.log(paylod)
      const response = await UserApi.login(paylod)
      console.log(response.token)
      commit('setToken', response.token)

      return response
    }
  }
}
