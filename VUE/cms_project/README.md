# cms_project

> 信息管理

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).




//npm i mint-ui vue-preview  axios vue-router monent vue -S;npm i webpack html-webpack-plugin css-loader style-loader less less-loader autoprefixer-loader babel-loader babel-core babel-preset-es2015 babel-plugin-transform-runtime url-loader file-loader vue-loader vue-template-compiler -D


http://47.89.21.179:8080/api/goods/getshopcarlist/88这个获取购物车商品列表的接口
http://47.89.21.179:8080/api/getmenus品牌管理的地址
http://yun.itheima.com/course/335.html黑马视频下面的评论区


轮播图请求：
http://www.liulongbin.top:3005/api/getlunbo





.icon-gouwucheman:before {
  content: "\e600";
}

.icon-huiyuan:before {
  content: "\e67e";
}

.icon-home:before {
  content: "\e616";
}




moment.js官网

日期格式化 用moment.js
moment().format('YYYY-MM-DD HH:mm:ss');

设置中英文
moment.locale('en')
moment.locale('zh-cn')

以前的时间
moment("20111031", "YYYYMMDD").fromNow();
可以用作评论下的时间，几天前，几秒前，几月前


预览插件 ： vue-preview



//导航钩子
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}