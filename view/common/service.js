/**
 * 豆瓣API接口
 */
var BaseURL = "https://api.douban.com/v2/";

var Douban_APIS = {
    /**
     * 图书搜索
     */
    book_search: BaseURL + "book/search",
    /**
     * 图书详情
     */
    book_detail_id: BaseURL + "book/",
    /**
     * 电影搜索
     */
    movie_search: BaseURL + "movie/search"

}

module.exports = Douban_APIS;
