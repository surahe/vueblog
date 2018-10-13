'use strict';

module.exports = (sequelize, DataType) => {
  let Comment = sequelize.define('Comment', {
    content: {
      type: DataType.STRING,
      defaultValue: ''
    },
    replyId: {
      type: DataType.STRING,
      default: ''
    }
  })
  Comment.associate = (models) => {
    models.Comment.belongsTo(models.User, {
      onDelete: 'CASCADE'
    })
    models.Comment.belongsTo(models.Article, {
      onDelete: 'CASCADE'
    })
  }
  return Comment
}