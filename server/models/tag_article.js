'use strict';

module.exports = (sequelize, DataTypes) => {
  let TagArticle = sequelize.define('tag_article', {
  })
  TagArticle.associate = (models) => {
    models.tag_article.belongsTo(models.user, {
      onDelete: 'CASCADE'
    })
    models.tag_article.belongsTo(models.tag, {
      onDelete: 'CASCADE'
    })
  }
  return TagArticle
}