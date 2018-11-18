'use strict';

const {formatTime} = require('../utils/tools')

module.exports = (sequelize, DataTypes) => {
  let Article = sequelize.define('article', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    publish: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    photo: {
      type: DataTypes.STRING
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
  Article.associate = (models) => {
    models.article.belongsTo(models.user, {
      onDelete: 'CASCADE'
    })
    models.article.belongsTo(models.category, {
      onDelete: 'CASCADE'
    })
  }
  return Article
}