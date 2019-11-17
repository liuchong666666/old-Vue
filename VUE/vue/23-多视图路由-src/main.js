//引入一堆
import Vue from 'vue';
import VueRouter from 'vue-router';

//主体
import App from './components/app.vue';
import header from './components/header.vue';
import footer from './components/footer.vue';


//注册全局头组件
Vue.component('headerVue',header);
Vue.component('footerVue',footer);


//安装插件
Vue.use(VueRouter);//挂载属性



//一个获取信息的只读对象($route)
// - 一个具备功能函数的对象($router)


//创建路由对象并配置路由规则
let router= new VueRouter({
    //routes
    routes:[
    //一个个对象
    {
        path:'/',
        components:{//加s  多个一起放,   ！！注意s和不加s，会出问题的！！

            //随意改后面的值，就随意改内容
            // header:header,
            // default:footer,//没有名字就default默认
            // footer:footer
            header:header,
            default:header,//没有名字就default默认
            footer:footer
        }
},
        
]
});



//new Vue 启动
new Vue({
    el:'#app',
    //让vue知道我们的路由规则
    router,//可以简写router
    render:c=>c(App),
})