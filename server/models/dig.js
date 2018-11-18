'use strict';

const {formatTime} = require('../utils/tools')

module.exports = (sequelize, DataTypes) => {
  let Dig = sequelize.define('dig', {
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
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
  Dig.associate = (models) => {
    models.dig.belongsTo(models.user, {
      onDelete: 'CASCADE'
    })
    models.dig.belongsTo(models.article, {
      onDelete: 'CASCADE'
    })
  }
  return Dig
}