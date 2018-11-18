'use strict';

const {formatTime} = require('../utils/tools')

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('user', {
    role: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    motto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return formatTime(this.getDataValue('createdAt'), 'YYYY-MM-DD HH:mm:ss')
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      get() {
        return formatTime(this.getDataValue('updatedAt'), 'YYYY-MM-DD HH:mm:ss')
      }
    }
  })
  return User
}