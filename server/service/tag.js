'use strict'

var Tag = require('../models').tag

const tagServer = {
  create: async(tagInfo) => {
    const tag =  await Tag.findOrCreate({
        where: {name: tagInfo.name},
        defaults: {name: tagInfo.name}
      })
      .spread(function(tag, created) {
        if (!created) {
          throw new Error('标签已存在')
        }
        return tag.get({
          plain: true
        })
      })
    return tag
  },
  findAll: async() => {
    const tags = await Tag.findAll({
      attributes: ['id', 'name', 'createdAt']
    })
    return tags
  },
  findById: async(tagId) => {
    return await Tag.findById(tagId)
  },
  delete: async(tagId) => {
    return await Tag.destroy({
      where: {id: tagId}
    })
  }
}

module.exports = tagServer