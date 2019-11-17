<template>
  <div>
      <div class="h">头部
      <!-- <a href="#/mymusic">进入音乐</a>
      <a href="#/movie">进入电影</a>
      <a href="#/mymusic">进入音乐</a>
      <a href="#/movie">进入电影</a>
      <a href="#/mymusic">进入音乐</a>
      <a href="#/movie">进入电影</a> -->

      <!-- 1：去哪里，根据name来匹配 -->
        <router-link :to="{name:'music'}">进入音乐1</router-link>
        <router-link :to="{name:'music'}">进入音乐2</router-link>
        <router-link :to="{name:'music'}">进入音乐3</router-link>

        <!-- 也可以跟路径使用 但上面的1最好 -->
        <router-link to='/movie'>进入电影</router-link>
      </div>
      <!-- 留坑，非常重要 -->
      <router-view class="b"></router-view>
      <div class="f">底部</div>
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