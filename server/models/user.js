'use strict';

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
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
  })
  return User
}