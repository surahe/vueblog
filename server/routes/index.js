'use strict'
const express = require('express')

const user = require('../controllers/user')
const tag = require('../controllers/tag')
const category = require('../controllers/category')

const router = express.Router()

router
	.post('/user/register', user.register)
	.post('/user/verify', user.verify)
	.post('/user/signin', user.signin)

router
	.post('/tag/createTag', tag.createTag)
	.get('/tag/findAllTags', tag.findAllTag)
	.get('/tag/findTag', tag.findTag)
	.post('/tag/destroyTag', tag.destroyTag)

router
	.post('/category/create', category.create)
	.get('/category/findAll', category.findAll)
	.get('/category/find', category.find)
	.post('/category/destroy', category.destroy)

module.exports = router