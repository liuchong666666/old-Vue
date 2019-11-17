//1、引入vue
import Vue from 'vue';
//2、
import App from './App.vue';
import { runInThisContext } from 'vm';

//3、

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