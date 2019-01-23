'use strict';

module.exports = (sequelize, DataTypes) => {
  let Dig = sequelize.define('dig', {
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  })
  Dig.associate = (models) => {
    models.dig.belongsTo(models.user, {
      onDelete: 'CASCADE'
    })
    models.dig.belongsTo(models.article, {
      onDelete: 'CASCADE'
    })
  }
  return Dig
}