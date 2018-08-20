import http from './http'

export const fetchSignIn = () => {
  return http.post('/login', params)
}
