const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("3a2561024d0c40dcb9274170b88bdba9");

newsapi.v2
    .everything({
        q: "mexico tesla",
        // sources: "bbc-news,the-verge",
        // domains: "bbc.co.uk, techcrunch.com",
        // language: "en",
        sortBy: "relevancy",
        pageSize: 2,
    })
    .then((response) => {
        console.log(response);
        /*
      {
        status: "ok",
        articles: [...]
      }
    */
    });
