<template>
  <div>
    <!-- 头部内容 -->
    <mt-header title="信息管理系统"></mt-header>
    <!-- <mt-button type="primary">测试mint-ui</mt-button> -->

    <!-- 给每次转换页面时候加个过度动画 -->
   <!-- out-in官方文档--》教程--》过渡&动画--》进入/离开&列表过渡 -->
    <transition name="router" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- 底部内容 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item " :to="{name:'home'}">
        <span class="mui-icon icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'member'}">
        <span class="mui-icon icon-huiyuan"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'shopcart'}">
        <span class="mui-icon icon-gouwucheman"><span class="mui-badge" id="badge">{{pickNum}}</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'search'}">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">查找</span>
      </router-link>
    </nav>

  </div>
</template>

<script>
  import connect from './components/common/connect.js'; //父子之间的通信
  import prodTools from './components/common/prodTools.js';
 
  //先创建父组件，后创建子组件
  export default {
    data() {
      return {
        pickNum: prodTools.getTotalCount()
      }
    },
    created() {
      /*
       //console.log(connect);//Vue$0对象
      // this.pickNum;//这里的this就是VueComponent对象
      // let self =this;//将这里的this赋值给self

      connect.$on('addShopcart', function (num) {
       // console.log('on接收到了');

        // console.log(this);//Vue$0对象//this是connect对象，而不是VueComponent对象
        // console.log(connect);//Vue$0对象
        this.pickNum += num; 
        // this.pickNum = this.pickNum + num ;

        // self.pickNum+=num;//self//VueComponent对象

      })*/
      connect.$on('addShopcart', num => {
        this.pickNum +=
        num; //箭头函数：当前的this不满足，this就会向上找，es6箭头函数中的this是定义时绑定的，就是this是继承自父执行上下文！！ES6中定义的时候绑定this的具体含义，应该继承的是父执行上下文里面的this，切忌是父执行上下文！！！
      });
     
    }
  }

</script>

<style scoped>
  .router-enter-active,.router-leave-active{
    transition: opacity .3s;
  }
  .router-enter,.router-leave-to{
    opacity: 0;
  }

</style>
