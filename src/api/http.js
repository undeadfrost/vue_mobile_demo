import axios from 'axios'
import qs from 'qs'
import {baseUrl} from '../config'

// 自定义Axios实例
const instance = axios.create({
  // 配置api地址
  baseURL: baseUrl,
  // 请求超时时间
  timeout: 10000,
  // 设置请求头
  headers: {'content-type': 'application/json; charset=UTF-8'},
  // 设置数据格式化
  transformRequest: [(data) => {
    data = qs.stringify(data)
    return data
  }]
})

// Axios请求拦截器
instance.interceptors.request.use(
  config => {
    // 在此添加发起请求前的信息
    config.headers.Authorization = ''
    return config
  },
  error => {
    // 对错误请求信息的处理
    console.log(error)
    return Promise.reject(error)
  }
)

// Axios响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据处理
    const data = response.data
    if (data.code === 1) {
      console.log('success')
    } else if (data.code === 0) {
      console.log('error')
    }
    return response
  },
  error => {
    // 对响应错误数据处理
    if (error && error.response) {
      if (error.response.status === 404) {
        console.log('error')
      } else if (error.response.status === 400) {
        console.log('error')
      } else if (error.response.status === 401) {
        console.log('error')
      }
    }
    return Promise.reject(error)
  }
)

const http = (method, url, params) => {
  if (method === 'get') {
    params = {params: params}
  }
  return new Promise((resolve, reject) => {
    instance[method](url, params).then(response => {
      resolve(response)
    }, error => {
      reject(error)
    }).catch(error => {
      reject(error)
    })
  }).catch(error => {
    console.log(error)
  })
}

export default http
