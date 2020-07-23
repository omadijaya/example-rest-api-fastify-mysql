const fastify = require('fastify')()
const routes = require('./routes')

fastify.register(routes);

module.exports = fastify