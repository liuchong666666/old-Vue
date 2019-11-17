<template>
  <div>
      <!-- <header-vue></header-vue> -->
      <div>我是头部</div>
      <hr/>
      <!-- 留坑，非常重要 坑名-->
        <router-view class="b" name="header"></router-view>
        <router-view class="b"></router-view>
        <router-view class="b" name="footer"></router-view>
      <hr/>
      <!-- <footer-vue></footer-vue> -->
      <div>我是底部</div>
      </div>
</template>
<script>


  export default {
    data() {
      return {

      }
    }
  }
</script>
<style>
.h{
height: 100px;
background-color: yellowgreen;
}
.b{
  height: 100px;
  background-color: skyblue;
}
.f{
  height: 100px;
  background-color:hotpink;
}
</style>