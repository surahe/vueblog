const cookie = require('js-cookie')

export default function ({ $axios, redirect }) {
  let token = cookie.get('token')
  if (token) {
    $axios.setToken(token)
  }
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
      case 0: // 接口访问成功，进入回调
        return response
      // case 1: // 可预期的错误，进入回调
      //   return response
      default:
        return Promise.reject(resData)
    }
  })

  // 响应失败
  $axios.onResponseError(error => {
    alert(error.response ? error.response.data.message : error.message)
    return Promise.reject(error)
  })
}