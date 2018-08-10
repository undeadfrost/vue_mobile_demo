import router from '../router'
import store from '../store'

// 全局钩子函数, 用户页面拦截(登录)
router.beforeEach((to, from, next) => {
  // 判断路由配置中是否为拦截页面
  if (to.meta.requireAuth) {
    // 从vuex中查找是否已经登录
    if (store.getters.isLogin) {
      next()
    } else {
      next({
        path: '/login',
        // url传参，用于通过权限验证后跳转至用户访问页面
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
  // 非配置拦截页面，直接进入
  else {
    next()
  }
})
