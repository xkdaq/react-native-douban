let URL = "http://120.79.75.17:8094/";
let TestURL = "http://www.wanandroid.com/tools/mockapi/1189/";


let APIS = {

    /**
     * 首页banner
     */
    getBanner: URL + "article/getBanner",

    /**
     * 获取类型
     * */
    getArticleType: URL + "article/getArticleType",



    //自己造的数据
    getTestBanner: TestURL + "getBanner",
    getTestArticleType: TestURL + "getArticleType",
    getNewsList: TestURL,

};

module.exports = APIS;
