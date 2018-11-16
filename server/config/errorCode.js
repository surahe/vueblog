// 参考 https://blog.csdn.net/ilv_xj/article/details/79114585

const errorCode = {
  // 成功
  success: {
    errorCode: 0,
    description: 'Success'
  },
  // 失败
  error: {
    errorCode: 1,
    description: 'error'
  },
  // 参数错误
  invalid_parameter: {
    errorCode: 100,
    description: 'Invalid parameter'
  },
  // Access token无效
  access_token_invalid: {
    errorCode: 110,
    description: 'Access token invalid or no longer valid'
  },
  // 资源不存在
  object_not_found: {
    errorCode: 803,
    description: 'Specified object cannot be found'
  },
  // 资源已存在
  object_exit: {
    errorCode: 804,
    description: 'Specified object already exists'
  },
  // 数据库错误
  database_error: {
    errorCode: 805,
    description: 'database error'
  }
}

module.exports = errorCode