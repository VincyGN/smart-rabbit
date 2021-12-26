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
        account: '546',
        token: 1
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
