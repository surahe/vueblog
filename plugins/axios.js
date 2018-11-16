import { Message } from 'element-ui'


export default function ({ $axios, redirect }) {
  // 请求成功
  $axios.onRequest(config  => {
    return config
  })

  // 请求失败
  $axios.onRequestError(error => {
    // 断网，请求发送监控等
    return Promise.reject(error)
  })

  // 响应成功
  $axios.onResponse(response => {
    let resData = response.data
    let { errorCode } = resData
  
    switch (errorCode) {
      case 0: // 如果业务成功，直接进成功回调
        return response
      case 1111:
        // 如果业务失败，根据不同 code 做不同处理
        // 比如最常见的授权过期跳登录
        // 特定弹窗
        // 跳转特定页面等
  
        location.href = 'xxx' // 这里的路径也可以放到全局配置里
        return
      default:
        return Promise.reject(resData)
    }
  })

  // 响应失败
  $axios.onResponseError(error => {
    Message.error(error.message)
    return Promise.reject(error)
  })
}