// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const path = require('path')
const mongoose = require("mongoose")
const connectDB = require('./database/mongoose')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../public'),
  prefix: '*', // optional: default '/'
})

fastify.register(require('fastify-cors'), {
  origin: "http://localhost",
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true
});

//register template engine
fastify.register(require('point-of-view'), {
  engine: {
    pug: require('pug')
  }
})

// Declare a route
fastify.get('/:any', async (request, reply) => {
  reply.view('/src/views/main.pug', { text: 'text' })
})

// register routes
fastify.register(require('./routes'));

fastify.ready(err => {
  if (err) throw err
  connectDB(mongoose)
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
