'use strict';

const {formatTime} = require('../utils/tools')

module.exports = (sequelize, DataTypes) => {
  let Comment = sequelize.define('comment', {
    content: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    replyId: {
      type: DataTypes.STRING,
      default: ''
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
  Comment.associate = (models) => {
    models.comment.belongsTo(models.user, {
      onDelete: 'CASCADE'
    })
    models.comment.belongsTo(models.article, {
      onDelete: 'CASCADE'
    })
  }
  return Comment
}