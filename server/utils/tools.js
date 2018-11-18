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