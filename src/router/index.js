import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '../pages/home/Index'
import LoginIndex from '../pages/login/Index'
import UserIndex from '../pages/user/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: HomeIndex,
    },
    {
      path: '/login',
      name: 'LoginIndex',
      component: LoginIndex,
    },
    {
      path: '/user',
      name: 'UserIndex',
      component: UserIndex,
      meta: {
        requireAuth: true
      }
    }
  ]
})
