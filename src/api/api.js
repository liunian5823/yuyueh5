import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui';
axios.interceptors.response.use(
  response => {
    return new Promise((resolve, reject) => {
      const res = response.data
      if (res.Result == '1') {
        resolve(res)
      } else {
        reject(res)
      }
    })
  },
  error => {
    console.log(error)
    // console.log(message.Message)
    // Message.error("123")
    const status = error.response.status
    switch (status) {
      case 500:
        Message.error("内部服务器错误")
        break
      case 404:
        Message.error("请求的网页不存在 ")
        break
      case 401:
        Message.error("未授权")
        break
      case 400:
        Message.error("请求无效")
        break
      case 403:
        Message.error("权限不够，请联系管理员")
        break
      default:
      // console.log(error.response.data.message)
    }
    return Promise.reject(error)
  }
)
export default {
  GET(url, params = {}, siidas) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers.common["Authorization"] = siidas;
      axios.get(url, {
        params: params
      }).then(response => {
        resolve(response)
      }).catch(err => {
        reject(err)
      })
    })
  },
  POST(url, params, siidas) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers.common["Authorization"] = siidas;
      axios.post(url, qs.stringify(params)).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
