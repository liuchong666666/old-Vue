<template>
  <div>
    <button @click="callDaddy">打电话给爸爸</button>
  </div>
</template>

<script>
  import connect from '../connector.js'
  export default {
    data() {//data是一个函数
      return {//return过一个对象
      }
    }, methods: {
      callDaddy() {
        //发射信号
          connect.$emit('phone','62分钟来');
      }
    }
  }
</script>
<style scoped>
  div {
    height: 50px;
    background-color: skyblue;
  }
</style>