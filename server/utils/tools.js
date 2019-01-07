'use strict'

var moment = require('moment')

/**
 * 
 * @param {Object} json errorCode、接口数据、message
 * @return {Object}
 */
exports.resData = (...Data) => {
  return Object.assign({}, ...Data)
}

exports.formatTime = (time, format) => {
  return moment(time).format(format)
}

/**
 * 生成4位随机验证码
 */
exports.AuthCode = () => {
  return Math.random().toString(16).slice(2, 6).toUpperCase()
}

/**
 * 设置过期时间
 * @param {Number} 分钟数
 * @return {Number} 时间戳
 */
exports.expireTime = (minutes) => {
  if (isNaN(minutes)) {
    throw new Error('参数必须是数字')
  }
  return new Date().getTime() + minutes * 60 * 1000
}