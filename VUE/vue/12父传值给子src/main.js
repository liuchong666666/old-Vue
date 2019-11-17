//1、引入vue
import Vue from 'vue';
//2、
import App from './App.vue';
import { runInThisContext } from 'vm';

//引入子组件
import headerVue from './components/header.vue';
//注册一个组件，第一个参数是名称，再template中使用，第二个参时是实际的对象，显示成什么内容，具备什么功能
import bodyVue from './components/body.vue';
import footerVue from './components/footer.vue';
  
//声明全局组件
Vue.component('headerVue',headerVue);
Vue.component('bodyVue',bodyVue);
Vue.component('footerVue',footerVue);
new Vue({
    el:'.app',
    // render:function(c){
    //     return c;
    // }
    // render:(c)=>{//1:当参数是一个的时候，小括号可以省略
    //     return c(App);//2：当代码只有一行且是返回值的时候，可以省略大括号
    // }
    render:c=>c(App)
})