<template>
  <div>
    <!-- 直接传属性 -->
    <header-vue textone="大"></header-vue>
    <!-- 动态传值 -->
    <body-vue v-bind:texttwo="text2"></body-vue>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
 export default {
    data() {//data是一个函数
      return {//return过一个对象
        text2:'哈哈呵呵'
      }

    },
    methods: {},
    //必须声明
    
  }
</script>
<style>
  
</style>