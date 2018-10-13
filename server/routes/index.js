'use strict'
const express = require('express')

const user = require('../controllers/user')

const router = express.Router()

router
	.get('/user/getUserInfo/', user.getUserById)
	.post('/user/createUser', user.registerUser)

module.exports = router