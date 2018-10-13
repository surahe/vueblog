'use strict';

module.exports = (sequelize, DataTypes) => {
  let Article = sequelize.define('Article', {
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
    }
  })
  Article.associate = (models) => {
    models.Article.belongsTo(models.User, {
      onDelete: 'CASCADE'
    })
  }
  return Article
}