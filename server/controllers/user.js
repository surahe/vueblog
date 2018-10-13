'use strict';

const User = require('../service/user')
const superstruct = require('superstruct')

const service = {
  registerUser: (req, res, next) => {
    const params = req.body
    const format = superstruct.struct({
      role: 'number',
      username: 'string',
      password: 'string',
      nickname: 'string'
    })
    try {
      format(params)
      User.create(params)
        .then((result) => {
          res.json(result)
        })
        .catch((err) => {
          console.log(err)
        })
    } catch (e) {
      console.log(e)
    }
  },
  getUserById: (req, res, next) => {
    const params = req.query
    const format = superstruct.struct({
      id: 'number'
    })
    try {
      // format(params)
      User.getUserById(params)
        .then((result) => {
          res.json(result)
        })
        .catch((err) => {
          console.log(err)
          res.json({
            errorCode: -1,
            message: err.message
          })
        })
    } catch (err) {
      console.log(err)
      res.json({
        errorCode: -1,
        message: err.message
      })
    }
  }
}

module.exports = service