'use strict';

const serverConfig = require('./config')
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')

const models = require('./models/index')
const router = require('./routes')

const app = express()
const host = serverConfig.host || '127.0.0.1'
const port = serverConfig.port || 3000

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

models.sequelize.sync({force: false}).then(function() {
  console.log("Server successed to start")
}).catch(function(err){
  console.log("Server failed to start due to error: %s", err)
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api', router)

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
