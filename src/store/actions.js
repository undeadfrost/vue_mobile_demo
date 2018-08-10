const actions = {
  updateUserInfo ({commit}, userInfo) {
    commit('updateUserInfo', userInfo)
  },
  setLoginState ({commit}, isLogin) {
    commit('setLoginState', isLogin)
  }
}

export default actions
