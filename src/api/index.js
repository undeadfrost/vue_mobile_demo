import http from './http'

const fetchApi = {
  login (params) {
    return http.post('/login', params)
  }
}

export default fetchApi
