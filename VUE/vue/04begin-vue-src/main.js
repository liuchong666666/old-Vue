//2、引入vue
import Vue from 'vue'
import App from './App.vue'

//3:创建一个Vue的实例，一般一个项目，大多就是一个vue实例来完成显示
new Vue({
    // el:'#app',//目的地
    //render：“dom结构” //渲染结构
    el:'#app',
    render:function(creater){
     return creater(App);//App包含 template/script/style，最终生成dom结构      
    }
})