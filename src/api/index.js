import http from './http'

const api = {
  login: '/login'
}

export const fetchSignIn = (params) => {
  return http('post', api.login, params)
}
