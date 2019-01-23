'use strict';

module.exports = (sequelize, DataTypes) => {
  let CommentArticle = sequelize.define('comment_article', {
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