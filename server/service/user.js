'use strict';

const User = require('../models').user

const userServer = {
  create: async (userInfo) => {
    const user = await User.create({
      username: userInfo.username,
      password: userInfo.password,
      nickname: userInfo.nickname,
      role: userInfo.role
    })
    return user
  },
  getUserById: async (id) => {
    const user = await User.findOne({
      where: {
        id: id
      }
    })
    return user
  }
}

module.exports = userServer