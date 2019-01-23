'use strict';

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