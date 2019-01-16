const jwt = require('jsonwebtoken')
const config = require('../config')
const errorCode = require('../config/errorCode')
const tools = require('../utils/tools')
 
module.exports = function(req, res, next) {　　 // 获取请求头文件中的token信息
  let token = req.headers['authorization']
  if (token) {
      // 确认token是否正确
      jwt.verify(token, config.jwt.secret, function (err, decoded) {
        if (err) {
          let message = ''
          if (err.name === 'TokenExpiredError') {
            message = '登录已过期，请重新登录'
          } else {
            message = 'token无效，请重新登录'
          }
          return res.status(403).json(tools.resData(
            errorCode.access_token_invalid,
            {message: message}
          ))
        } else {
          res.locals.user = decoded.user
          res.locals.id = decoded.id
          next()
        }
      })
  } else {
      // 如果没有token，则返回错误
      return res.status(403).send(tools.resData(
        errorCode.access_token_invalid,
        {message: '无权限使用此功能，请登录'}
      ))
  }
};