'use strict';

module.exports = (sequelize, DataTypes) => {
  let TagArticle = sequelize.define('TagArticle', {
  })
  TagArticle.associate = (models) => {
    models.TagArticle.belongsTo(models.User, {
      onDelete: 'CASCADE'
    })
    models.TagArticle.belongsTo(models.Tag, {
      onDelete: 'CASCADE'
    })
  }
  return TagArticle
}