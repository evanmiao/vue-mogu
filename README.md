# 移动端商城

## 项目简介

该项目是基于 Vue 构建的简易的移动端电商类单页面应用，实现了商城首页、分类页、商品详情页、购物车以及个人中心等页面。

[预览链接](https://evanmiao.github.io/vue-shop/) （*项目使用 better-scroll 处理页面滚动，若使用 PC 预览，应拖动页面而不是使用鼠标滚轮。*）

## 技术栈

- [Vue](https://cn.vuejs.org/) + [Vue CLI](https://cli.vuejs.org/zh/) ：搭建项目模版
- [Vue Router](https://router.vuejs.org/zh/) ：前端路由
- [Vuex](https://vuex.vuejs.org/zh/) ：状态管理
- [Stylus](https://stylus-lang.com/) ：CSS 预处理器
- [Axios](https://www.axios.com/) ：基于 Promise 的 HTTP 库
- [Mock.js](http://mockjs.com/) ：模拟接口数据
- [vue-lazyload](http://hilongjw.github.io/vue-lazyload/) ：图片懒加载
- [better-scroll](https://ustbhuangyi.github.io/better-scroll/) ：解决各种滚动场景需求
- [fastclick](https://github.com/ftlabs/fastclick) ：解决移动端 300ms 延迟问题

## 开发和发布

### Install dependencies

```bush
npm install
```

### Compiles and hot-reloads for development

```bush
npm run serve
```

### Compiles and minifies for production

```bush
npm run build
```

### Lints and fixes files

```bush
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 目录结构

``` pre
vue-shop
├── public                                            // 静态资源目录（不会被 webpack 构建）
│   ├── facicon.ico                                   // 图标
│   └── index.html                                    // 项目入口文件
├── src                                               // 项目核心文件（源码）
│   ├── api                                           // 请求接口封装
│   │   ├── category.js                               // 分类页接口
│   │   ├── detail.js                                 // 详情页接口
│   │   └── home.js                                   // 首页接口
│   ├── assets                                        // 资源目录
│   │   ├── css                                       // 样式资源
│   │   │   ├── main.styl                             // 基础样式
│   │   │   ├── minxins.styl                          // stylus 混合
│   │   │   ├── reset.css                             // 重置样式
│   │   │   └── variables.styl                        // stylus 变量
│   │   ├── img                                       // 图片资源
│   │   │   ├── cart                                  //
│   │   │   ├── common                                //
│   │   │   ├── detail                                //
│   │   │   ├── home                                  //
│   │   │   ├── profile                               //
│   │   │   └── tabbar                                //
│   │   └── index.js                                  // 统一出口文件
│   ├── components                                    // 组件目录
│   │   ├── base                                      //
│   │   │   ├── GridView                              // 网格布局
│   │   │   ├── NavBar                                // 顶部导航条
│   │   │   ├── Scroll                                // 页面滚动
│   │   │   ├── Swiper                                // 轮播图
│   │   │   └── TabBar                                // tabBar
│   │   └── layout                                    //
│   │       ├── BackTop                               // 回到顶部
│   │       ├── Icon                                  // 图标
│   │       ├── MainTabBar                            // tabBar 封装
│   │       └── TabControl                            // tab 切换
│   ├── mock                                          // 模拟数据
│   │   └── index.js                                  //
│   ├── router                                        // 路由
│   │   └── index.js                                  //
│   ├── store                                         // Vuex
│   │   ├── actions.js                                //
│   │   ├── getters.js                                //
│   │   ├── index.js                                  //
│   │   └── mutations.js                              //
│   ├── utils                                         //
│   │   ├── mixin.js                                  // Vue 混入
│   │   ├── request.js                                // 网络请求封装
│   │   └── util.js                                   // 工具函数封装
│   ├── views                                         // 页面
│   │   ├── cart                                      // 购物车
│   │   │   ├── components                            // 子组件
│   │   │   │   ├── BottomBar.vue                     //
│   │   │   │   ├── CartList.vue                      //
│   │   │   │   ├── CartListItem.vue                  //
│   │   │   │   └── CheckButton.vue                   //
│   │   │   └── Cart.vue                              //
│   │   ├── category                                  // 分类页
│   │   │   ├── components                            // 子组件
│   │   │   │   ├── TabContent.vue                    //
│   │   │   │   ├── TabContentCategory.vue            //
│   │   │   │   ├── TabContentDetail.vue              //
│   │   │   │   └── TabMenu.vue                       //
│   │   │   └── Category.vue                          //
│   │   ├── detail                                    // 详情页
│   │   │   ├── components                            // 子组件
│   │   │   │   ├── DetailBaseInfo.vue                //
│   │   │   │   ├── DetailBottomBar.vue               //
│   │   │   │   ├── DetailDetail.vue                  //
│   │   │   │   ├── DetailNavBar.vue                  //
│   │   │   │   ├── DetailRecommend.vue               //
│   │   │   │   ├── DetailReview.vue                  //
│   │   │   │   ├── DetailShopInfo.vue                //
│   │   │   │   └── DetailSwiper.vue                  //
│   │   │   └── Detail.vue                            //
│   │   ├── home                                      // 首页
│   │   │   ├── components                            // 子组件
│   │   │   │   ├── FeatureView.vue                   //
│   │   │   │   ├── GoodsList.vue                     //
│   │   │   │   ├── GoodsListItem.vue                 //
│   │   │   │   ├── HomeSwiper.vue                    //
│   │   │   │   └── RecommendView.vue                 //
│   │   │   └── Home.vue                              //
│   │   └── profile                                   // 个人中心页
│   │       ├── components                            // 子组件
│   │       │   ├── ListView.vue                      //
│   │       │   └── UserInfo.vue                      //
│   │       └── Profile.vue                           //
│   ├── App.vue                                       // 根组件
│   └── main.js                                       // 入口 js 文件，初始化vue实例，加载公共组件，引入组件库
├── .browserslistrc                                   // 浏览器兼容配置文件，babel 会根据这个进行 Polyfill
├── .editerconfig                                     // 编辑器代码规范（缩进等）
├── .env.development                                  // 开发环境环境变量
├── .env.production                                   // 生产环境环境变量
├── .eslintrc                                         // eslint 配置文件，代码规范检查
├── .gitignore                                        // git 忽略文件
├── babel.config.js                                   // babel 配置文件，设置转码规则和插件
├── deploy.sh                                         // 部署脚本
├── package.json                                      // 项目依赖
├── package-lock.json                                 // 锁定依赖包版本号，npm 5 新增，可以优化性能
├── postcss.config.js                                 // PostCSS 配置文件，CSS 转换插件，如 autoprefixer
└── vue.config.js                                     // 项目配置及 webpack 配置
```
