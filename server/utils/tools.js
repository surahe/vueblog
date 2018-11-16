'use strict'

/**
 * 
 * @param {Object} json errorCode、接口数据、message
 * @return {Object}
 */
exports.resData = (...Data) => {
  return Object.assign({}, ...Data)
}
