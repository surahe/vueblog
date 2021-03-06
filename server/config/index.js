'use strict';

var path = require('path')

module.exports = {
  host: '127.0.0.1',
  port: 3000,
  mysql: {
    host: '127.0.0.1',
    database: 'vue_blog',
    port: 3306,
    username: 'root',
    password: '123456'
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
    db: 0,
    password: '',
  },
  smtp: {
    host: 'smtp.qq.com',
    port: 587,
    user: '375262986@qq.com',
    passport: 'dknzazjtuffxbgbe'
  },
  session_secret: 'sura_blog_secret',
  cookie_name: 'sura_blog',
  log_dir: path.join(__dirname, 'logs'),
  jwt: {
    secret: 'vueblog'
  }
}