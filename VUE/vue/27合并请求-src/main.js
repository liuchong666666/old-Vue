//引入一堆
import Vue from 'vue';

//主体
import App from './components/app.vue';

//引入
import Axios from 'axios';

Axios.defaults.baseURL='http://47.89.21.179:8080/api/';

//给Vue原型挂载一个属性
Vue.prototype.$axios=Axios;

//new Vue 启动
new Vue({
    el:'#app',
    render:c=>c(App),
})