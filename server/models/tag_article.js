'use strict';

const {formatTime} = require('../utils/tools')

module.exports = (sequelize, DataTypes) => {
  let TagArticle = sequelize.define('tag_article', {
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