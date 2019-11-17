<template>
  <div>
      <mt-header title="多个按钮">
          <!-- <router-link to="/" slot="left"> -->
            <mt-button icon="back">返回</mt-button>
            <mt-button >关闭</mt-button>
          <!-- </router-link> -->
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <button @click="handleClose">显示弹出框</button>

        <mt-switch v-model="value"></mt-switch>


    <!-- 4000:4秒 -->
      <mt-swipe :auto="4000">
          <mt-swipe-item>1</mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
  </div>
  </div>
</template>
<script>
//在js部分所有变量都是模块作用域
//如果需要使用就必须引入
import { Toast } from 'mint-ui';

  export default {
    data() {//data是一个函数
      return {//return过一个对象
        text: '123',
        value:false
      }
    },
    methods:{
      handleClose(){
        Toast('提示信息');
      }
    },
    compoents:{
  //  router-link
    }
  }
</script>
<style>

</style>