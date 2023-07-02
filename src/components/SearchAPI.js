import $ from "jquery";

var params = {
  query:
    '{"$query":{"conceptUri":"http://en.wikipedia.org/wiki/India"},"$filter":{"forceMaxDataTimeWindow":"31"}}',
  resultType: "articles",
  articlesSortBy: "date",
  articlesCount: 100,
  articleBodyLen: -1,
  apiKey: "59916f38-88a8-4998-b989-69669b94fb66",
};

$.ajax({
  url: "https://newsapi.ai/api/v1/article/getArticles",
  crossDomain: true,
  data: params,
  method: "GET",
})
  .done(function (result) {
    console.log(result);
  })
  .fail(function (err) {
    console.error(err.statusText);
  });
