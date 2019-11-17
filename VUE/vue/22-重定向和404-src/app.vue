<template>
  <div>
    <div>头</div>
    <!-- 留坑 -->
    <router-view style="color:red"></router-view>
    <div>底</div>
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