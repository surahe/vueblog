'use strict';

const User = require('../models').user

const userServer = {
  create: async (userInfo) => {
    const user = await User.create({
      username: userInfo.username,
      password: userInfo.password,
      nickname: userInfo.nickname,
      email: userInfo.email,
      role: userInfo.role
    })
    return user
  },
  findOne: async (condition) => {
    const user = await User.findOne({
      where: condition
    })
    return user
  }
}

module.exports = userServer