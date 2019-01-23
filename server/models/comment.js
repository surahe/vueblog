'use strict';

module.exports = (sequelize, DataTypes) => {
  let Comment = sequelize.define('comment', {
    content: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    replyId: {
      type: DataTypes.STRING,
      default: ''
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