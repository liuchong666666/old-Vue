<template>
  <div>
    <header-vue></header-vue>
    <hr>
  
    <!-- //用来显示music -->
    <router-view></router-view>
    <hr>
    <footer-vue></footer-vue>
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