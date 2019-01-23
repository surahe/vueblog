'use strict';

module.exports = (sequelize, DataTypes) => {
  let Category = sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return Category
}