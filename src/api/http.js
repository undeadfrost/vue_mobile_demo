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
    config.headers.Authorization = 'abc'
    return config
  },
  error => {
    // 对错误请求信息的处理
    return Promise.reject(error)
  }
)

// Axios响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据处理
    return response
  },
  error => {
    // 对响应错误数据处理
    return Promise.reject(error)
  }
)

export default instance
