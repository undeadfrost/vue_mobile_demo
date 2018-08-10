const mutations = {
  updateUserInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  setLoginState (state, isLogin) {
    state.isLogin = isLogin
  }
}

export default mutations
