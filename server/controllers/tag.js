'use strict'

const Tag = require('../service/tag')
const superstruct = require('superstruct')
const errorCode = require('../config/errorCode')
const {resData} = require('../utils/tools')


const tagController = {
  createTag: (req, res, next) => {
    const params = req.body
    const format = superstruct.struct({
      name: 'string'
    })
    try {
      format(params)
      Tag.create(params)
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
  findAllTag: (req, res, next) => {
    Tag.findAll()
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
  findTag: (req, res, next) => {
    const params = req.query
    const format = superstruct.struct({
      id: 'string'
    })
    try {
      format(params)
      Tag.findById(params.id)
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
  destroyTag: (req, res, next) => {
    const params = req.body
    const format = superstruct.struct({
      id: 'number'
    })
    try {
      format(params)
      Tag.delete(params.id)
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

module.exports = tagController