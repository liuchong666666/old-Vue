<template>
  <div>
      <div class="h">头</div>
      <!-- 留坑，非常重要 -->
      <router-view class="b"></router-view>
      <div class="f">底部</div>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
  
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