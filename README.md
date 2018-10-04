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







### 三、第三方框架  

- [react-native-tab-navigator](https://github.com/happypancake/react-native-tab-navigator "react-native-tab-navigator")



