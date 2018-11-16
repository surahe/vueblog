'use strict'
const express = require('express')

const user = require('../controllers/user')
const tag = require('../controllers/tag')

const router = express.Router()

router
	.get('/user/getUserInfo/', user.getUserById)
	.post('/user/createUser', user.registerUser)

router
	.post('/tag/createTag', tag.createTag)
	.get('/tag/findAllTags', tag.findAllTag)
	.get('/tag/findTag', tag.findTag)
	.post('/tag/destroyTag', tag.destroyTag)

module.exports = router