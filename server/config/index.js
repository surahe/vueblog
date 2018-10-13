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
  cookie_name: 'sura_blog',
  log_dir: path.join(__dirname, 'logs')
}