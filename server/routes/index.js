'use strict'
const express = require('express')

const user = require('../controllers/user')
const tag = require('../controllers/tag')
const category = require('../controllers/category')
const checkToken = require('../middleware/checkToken')

const router = express.Router()

router
	.post('/user/register', user.register)
	.post('/user/verify', user.verify)
	.post('/user/signin', user.signin)

router
	.post('/tag/createTag', checkToken, tag.createTag)
	.get('/tag/findAllTags', tag.findAllTag)
	.get('/tag/findTag', tag.findTag)
	.post('/tag/destroyTag', checkToken, tag.destroyTag)

router
	.post('/category/create', checkToken, category.create)
	.get('/category/findAll', category.findAll)
	.get('/category/find', category.find)
	.post('/category/destroy', checkToken, category.destroy)

module.exports = router