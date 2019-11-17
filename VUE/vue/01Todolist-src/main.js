// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import TodoList from './TodoList'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { TodoList },//{ App:APP }引入的是APP组件，如果键和值相同，就可以写一个
  template: '<TodoList/>'//<div><App/></div>
})
