'use strict';

const {formatTime} = require('../utils/tools')

module.exports = (sequelize, DataTypes) => {
  let CommentArticle = sequelize.define('comment_article', {
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
  CommentArticle.associate = (models) => {
    models.comment_article.belongsTo(models.comment, {
      onDelete: 'CASCADE'
    })
    models.comment_article.belongsTo(models.article, {
      onDelete: 'CASCADE'
    })
  }
  return CommentArticle
}