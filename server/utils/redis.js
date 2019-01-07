const config = require('../config')
const ioRedis = require('ioredis')

var redis = new ioRedis({
  port: config.redis.port,
  host: config.redis.host,
  db: config.redis.db,
  pass: config.redis.password
})

redis.on('error', function (err) {
  if (err) {
    console.log('connect to redis error, check your redis config', err)
    process.exit(1);
  }
})

module.exports = redis