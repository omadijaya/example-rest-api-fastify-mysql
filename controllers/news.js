const newsModel = require('../models/newsModel')

async function getNewsList (request, reply) {
    var limit   = 20;
    var offset  = 0;
    var page    = 1;
    
    if (typeof request.query.limit !== "undefined") {
      if (parseInt(request.query.limit) > 0) {
        limit = parseInt(request.query.limit);
      }
    }

    if (typeof request.query.page !== "undefined") {
      if (parseInt(request.query.page) > 0) {
        page = parseInt(request.query.page);
        offset = (page-1)*limit
      }
    }

    var queryParams = { offset: offset, limit: limit }
    const newsData = await newsModel.newsList(queryParams);

    var response = {page: page, per_page: limit, data:newsData[0]}
    return reply.status(200).send(response);
}

async function getNewsDetail (request, reply) {
    
    const newsData = await newsModel.newsDetail(request.params.id);
    if (newsData.length > 0) {
        return reply.status(200).send({ data:newsData[0] });
    } else {
        return reply.status(500).send({ error: "News Not found!"});
    }
}


module.exports = {
    getNewsList,
    getNewsDetail
};
