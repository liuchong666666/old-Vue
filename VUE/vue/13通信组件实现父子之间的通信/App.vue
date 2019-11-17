<template>
  <div>
    <subVue></subVue>
    <button @click="listen">爸爸焦急的听电话</button>
  </div>
</template>
<script>
//引入连接器
import connect from './connector.js';

 export default {
    data() {//data是一个函数
      return {//return过一个对象
        text2:'哈哈呵呵'
      }

    },
    methods: {
      listen(){
        connect.$on('phone',function(msg){
           console.log(msg) 
        });
      }
    },

    
  }
</script>
<style>
  
</style>