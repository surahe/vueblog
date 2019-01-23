'use strict';

module.exports = (sequelize, DataTypes) => {
  let Tag = sequelize.define('tag', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return Tag
}