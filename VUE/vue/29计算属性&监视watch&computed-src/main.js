//引入一堆
import Vue from 'vue';

//主体
import App from './components/app.vue';

//引入
import Axios from 'axios';

//引入mint-ui
import Mint from 'mint-ui';//export default整个对象
import {Indicator} from 'mint-ui';//export整个对象.Indicator--> {Indicator}
//引入css
import 'mint-ui/lib/style.css';
//安装插件，注册一堆全局组件
Vue.use(Mint)




// Axios.defaults.baseURL='http://182.254.146.100:8899/api/';
Axios.defaults.baseURL='http://47.89.21.179:8080/api/';


//默认设置
Axios.defaults.headers={
    accept:'default'
}

//拦截器
Axios.interceptors.request.use(function(config){
    Mint.Indicator.open();//mint-ui的等待图标开始（转圈圈）
   //请求发起之前 显示loadding
    console.log(config)
    return config;
})

Axios.interceptors.response.use(function(data){
    //在响应回来之后隐藏loadding
    Mint.Indicator.close();////mint-ui的等待图标结束
    console.log(data);
     return data;
 })

//给Vue原型挂载一个属性
Vue.prototype.$axios=Axios;

//new Vue 启动
new Vue({
    el:'#app',
    render:c=>c(App),
})