let news = require('../controllers/news');

async function routes (fastify, options) {

    fastify.get('/', function (request, reply) {
        reply.send({message: 'ping success', code: 200})
    })

    fastify.get('/news', news.getNewsList);
    fastify.get('/news/:id', news.getNewsDetail);

}

module.exports = routes;