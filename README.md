# react-native-douban


初学React-Native

### 版本:    
- react:16.5.0       
- react-native:0.57.1    

### 一、项目模块划分

#### 1.1公共模块
- 工具类  util.js  
  获取屏幕宽高  
  封装fetch的get请求  
  正在加载loading组件
  
- API接口列表  service.js  
  图书搜索  
  图书详情  
  电影搜索  
  
- Navigator封装  navigator.js  
  每个模块需要Navigator控制页面导航
  
- Header封装  header.js  
  图书详情和电影详情都需要header
  
- 搜索框封装  seachBar.js  
  图书列表和电影列表都需要搜索框
  
- WebView封装 customWebView.js  
  通过WebView加载详情
  
#### 1.2图书模块  
- 图书列表      book_list.js
- 图书列表item  book_item.js
- 图书详情      book_detail.js

#### 1.3电影模块  
- 电影列表      movie_list.js
- 电影列表item  movie_item.js


### 二、API
#### 2.1搜索图书
**请求URL：** 
-  `https://api.douban.com/v2/book/search`

**请求方式：**
- GET

**参数：**

|参数	|意义	|备注|
|----|----|----|
|q	|查询关键字	|q和tag必传其一|
|tag	|查询的tag	|q和tag必传其一|
|start	|取结果的offset	|默认为0|
|count	|取结果的条数	|默认为20，最大为100|


 **返回示例**

```
{
  "count": 1,
  "start": 0,
  "total": 15,
  "books": []
}
```  
#### 2.2图书详情
**请求URL：** 
-  `https://api.douban.com/v2/book/{id}`  
-  `https://api.douban.com/v2/book/26821262`

**请求方式：**
- GET

**参数：**

|参数	|意义	|备注|
|----|----|----|
|id	|图书id	||


 **返回示例**

```
{
  "rating": {
    "max": 10,
    "numRaters": 30,
    "average": "6.8",
    "min": 0
  },
  "subtitle": "",
  "author": [
    "[美]艾森曼"
  ],
  "pubdate": "2016-6-1",
  "tags": [
    {
      "count": 18,
      "name": "React",
      "title": "React"
    },
    {
      "count": 9,
      "name": "移动开发",
      "title": "移动开发"
    },
	....
  ],
  "origin_title": "",
  "image": "https://img3.doubanio.com\/view\/subject\/m\/public\/s29105336.jpg",
  "binding": "平装",
  "translator": [
    "黄为伟"
  ],
  "catalog": "",
  "pages": "221",
  "images": {
    "small": "https://img3.doubanio.com\/view\/subject\/s\/public\/s29105336.jpg",
    "large": "https://img3.doubanio.com\/view\/subject\/l\/public\/s29105336.jpg",
    "medium": "https://img3.doubanio.com\/view\/subject\/m\/public\/s29105336.jpg"
  },
  "alt": "https:\/\/book.douban.com\/subject\/26821262\/",
  "id": "26821262",
  "publisher": "人民邮电出版社",
  "isbn10": "7115425264",
  "isbn13": "9787115425263",
  "title": "React Native开发指南",
  "url": "https:\/\/api.douban.com\/v2\/book\/26821262",
  "alt_title": "",
  "author_intro": "",
  "price": "CNY 59.00"
}
```



#### 2.3搜索电影
**请求URL：** 
-  `https://api.douban.com/v2/movie/search`
-  `https://api.douban.com/v2/movie/search?q=%E4%BB%8E%E4%BD%A0%E7%9A%84%E5%85%A8%E4%B8%96%E7%95%8C%E8%B7%AF%E8%BF%87&&count=1`

**请求方式：**
- GET

**参数：**

|参数	|意义	|备注|
|----|----|----|
|q	|查询关键字	|q和tag必传其一|
|tag	|查询的tag	|q和tag必传其一|
|start	|取结果的offset	|默认为0|
|count	|取结果的条数	|默认为20，最大为100|


 **返回示例**

```
{
  "count": 1,
  "start": 0,
  "total": 24,
  "subjects": [
  ],
  "title": "搜索 "从你的全世界路过" 的结果"
}
```  


### 三、第三方框架  

- [react-native-tab-navigator](https://github.com/happypancake/react-native-tab-navigator "react-native-tab-navigator")



