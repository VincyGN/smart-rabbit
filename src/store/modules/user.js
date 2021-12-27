// 用户模块
export default {
  namespaced: true,
  state () {
    return {
    // 用户信息
      profile: {
        id: '',
        avatar: '',
        mobile: '',
        nickname: '',
        account: '',
        token: ''
      }
    }
  },
  mutations: {
    //   设置用户信息
    setUser (state, payload) {
      state.profile = payload
    }
  }
}
