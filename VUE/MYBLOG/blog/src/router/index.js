import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '../components/Header.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     redirect:'/index'//重定向
    },
    {
      path:'/index',
      name:'index',
      components:{
        header:Header,
        main:Home,
      }
    }
  ]
})
