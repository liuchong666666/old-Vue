// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Customers from './components/Customers.vue'
import About from './components/About.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

//设置路由
const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [{
      path: '/',
      component: Customers
    },
    {
      path: '/about',
      component: About
    },

  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
     <router-link to="/about">关于</router-link>
      <router-view></router-view>
    </div>
  `
}).$mount("#app")
