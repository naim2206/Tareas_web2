const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("3a2561024d0c40dcb9274170b88bdba9");

function select(q) {
    return newsapi.v2.everything({
        q,
        sortBy: "relevancy",
        // pageSize: 2,
    });
}

module.exports = select;
