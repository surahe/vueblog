'use strict'

const Category = require('../service/category')
const superstruct = require('superstruct')
const errorCode = require('../config/errorCode')
const {resData} = require('../utils/tools')


const controller = {
  create: (req, res, next) => {
    const params = req.body
    const format = superstruct.struct({
      name: 'string'
    })
    try {
      format(params)
      Category.create(params)
        .then((result) => {
          res.json(resData(errorCode.success,  {
            message: '创建成功',
            result
          }))
        })
        .catch((err) => {
          res.json(resData(errorCode.database_error, {
            message: err.message
          }))
        })
    } catch (err) {
      res.json(resData(errorCode.invalid_parameter, {
        message: err.message
      }))
    }
  },
  findAll: (req, res, next) => {
    Category.findAll()
      .then((result) => {
        res.json(resData(errorCode.success, {
          message: '搜索成功',
          result
        }))
      })
      .catch((err) => {
        res.json(resData(errorCode.database_error, {
          message: err.message
        }))
      })
  },
  find: (req, res, next) => {
    const params = req.query
    const format = superstruct.struct({
      id: 'string'
    })
    try {
      format(params)
      Category.findById(params.id)
        .then((result) => {
          res.json(resData(errorCode.success,  {
            message: '查找成功',
            result
          }))
        })
        .catch((err) => {
          res.json(resData(errorCode.database_error, {
            message: err.message
          }))
        })
    } catch (err) {
      res.json(resData(errorCode.invalid_parameter, {
        message: err.message
      }))
    }
  },
  destroy: (req, res, next) => {
    const params = req.body
    const format = superstruct.struct({
      id: 'number'
    })
    try {
      format(params)
      Category.delete(params.id)
        .then((result) => {
          let message = result > 0 ? '删除成功' : '没有对应结果'
          res.json(resData(errorCode.success,  {
            message
          }))
        })
        .catch((err) => {
          res.json(resData(errorCode.database_error, {
            message: err.message
          }))
        })
    } catch (err) {
      res.json(resData(errorCode.invalid_parameter, {
        message: err.message
      }))
    }
  }
}

module.exports = controller