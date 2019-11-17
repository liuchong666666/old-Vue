<template>
  <div>
    <ul>
      <li v-for="(stu,index) in stus" v-bind:key="index">
        index:{{index}},stu:{{stu}}
      </li>

      使用对象的方式 <hr/> 


      <li v-for="(value,key,index) in person" v-bind:key="index">
        value:{{value}},
        key:{{key}},
        index:{{index}}
        </li>
    </ul>
  </div>
</template>

<script>
 
  export default {
    data() {//data是一个函数
      return {//return过一个对象
        isRed: false,
        stus: [{ name: "jack", score: 'A' }, { name: "nose", score: 'B' }],
        person:{name:'mike',alise:'麦克'}
        
      }
    }
  }
</script>
<style>
  .red {
    background-color: red;
  }

  .green {
    background-color: green;
  }

  .big {
    font-size: 50px;
  }
</style>