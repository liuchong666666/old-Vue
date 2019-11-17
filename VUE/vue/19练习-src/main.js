//引入一堆
import Vue from "vue";//Vue实例
import VueRouter from "vue-router";//路由

//主体
import App from "./components/app.vue";
import List from "./components/list.vue";
import Detail from "./components/detail.vue";


//安装插件
Vue.use(VueRouter);//挂载属性

// //创建路由对象并配置路由规则
let router = new VueRouter({
    routes:[
        //查询字符串
       // {name:"detail",path:"/detail",component:Detail},
        //path方式
         {name:"detail",path:"/detail/:id",component:Detail},
        {path:"/list",component:List},
    ],
});


//new Vue启动
new Vue({
    el:"#app",
    router,
    render:c=>c(App)
})