'use strict'

var Category = require('../models').category

const categoryServer = {
  create: async(categoryInfo) => {
    const category =  await Category.findOrCreate({
        where: {name: categoryInfo.name},
        defaults: {name: categoryInfo.name}
      })
      .spread(function(category, created) {
        if (!created) {
          throw new Error('分类已存在')
        }
        return category.get({
          plain: true
        })
      })
    return category
  },
  findAll: async() => {
    const category = await Category.findAll({
      attributes: ['id', 'name', 'createdAt']
    })
    return category
  },
  findById: async(categoryId) => {
    return await Category.findById(categoryId)
  },
  delete: async(categoryId) => {
    return await Category.destroy({
      where: {id: categoryId}
    })
  }
}

module.exports = categoryServer