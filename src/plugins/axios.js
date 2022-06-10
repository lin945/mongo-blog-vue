/**
 * 封装 axios
 */
import axios from 'axios'
import { Message } from 'element-ui';
import storage from "@/store/storage";
const config = {
  baseURL: process.env.VUE_APP_BASE_URL || '',
  timeout: 5 * 1000, // 请求超时时间设置
  crossDomain: true,
  // withCredentials: true, // Check cross-site Access-Control
  // 定义可获得的http响应状态码
  // return true、设置为null或者undefined，promise将resolved,否则将rejected
  validateStatus(status) {
    return status >= 200 && status < 510
  },
}



// 创建请求实例
const _axios = axios.create(config)

_axios.interceptors.request.use(
    originConfig => {
      const reqConfig = { ...originConfig }

      // step2: permission 处理
      // if(reqConfig.url!=null&&reqConfig.url.contains('admin')&&reqConfig.url!=="admin/login") {
      //   const accessToken = localStorage.getItem('access_token')
      //   if (accessToken) {
      //     reqConfig.headers.Authorization = accessToken
      //   }
      // }
      if (reqConfig.url!=null&&reqConfig.url.startsWith("/admin/")){
        reqConfig.headers.Authorization=storage.getToken()
        console.log(reqConfig)
      }
      return reqConfig
    },
    error => Promise.reject(error),
)

// Add a response interceptor
_axios.interceptors.response.use(
    async res => {
      const { code,message } = res.data
      if (res.status.toString().charAt(0) === '2'&&code!=null&&code===200) {
        return res.data
      }
      return new Promise( (resolve, reject) => {
        let tipMessage = ''
        // const { url } = res.config

        // 弹出信息提示的第一种情况：直接提示后端返回的异常信息（框架默认为此配置）；
        // 特殊情况：如果本次请求添加了 handleError: true，用户自行通过 try catch 处理，框架不做额外处理
        if (res.config.handleError) {
          return reject(res)
        }

        if (typeof message === 'string') {
          tipMessage = message
        }
        if (Object.prototype.toString.call(message) === '[object Object]') {
          [tipMessage] = Object.values(message).flat()
        }
        if (Object.prototype.toString.call(message) === '[object Array]') {
          [tipMessage] = message
        }
        Message.error(tipMessage)
        return  reject(res)
      })
    },
    error => {
      if (!error.response) {
        Message.error('请检查 API 是否异常')
        console.log('error', error)
      }

      // 判断请求超时
      if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        Message.warning('请求超时')
      }
      return Promise.reject(error)
    },
)

// 导出常用函数

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function post(url, data = {}, params = {}) {
  return _axios({
    method: 'post',
    url,
    data,
    params,
  })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function get(url, params = {}) {
  return _axios({
    method: 'get',
    url,
    params,
  })
}

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function put(url, data = {}, params = {}) {
  return _axios({
    method: 'put',
    url,
    params,
    data,
  })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function _delete(url, params = {}) {
  return _axios({
    method: 'delete',
    url,
    params,
  })
}

export default _axios
