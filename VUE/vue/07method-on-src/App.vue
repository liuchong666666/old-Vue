<template>
  <div>
    <div v-bind:class="isRed?'red':'green'">
      单个class
    </div>
    <div :class="{'red':true,'big':true}">
      多个class
    </div>
    复杂情况，通过遍历，根据当前对象的成绩，匹配成绩和样式的清单对象，用stu.score
    成绩做key，取对象的value，最终返回字符串做样式名
    <ul>
      <li v-for="stu in stus" :class="{'A':'red','B':'green'}[stu.score]">
        {{stu.name}}
      </li>
    </ul>
    <!-- <button v-on:click="isRed=!isRed">点我大变化</button> -->
    <!-- v-on:用@代替 -->
    <!-- <button @click="change()">点我大变化</button> -->
    <!-- 不写参数就直接写函数名 -->
    <button @click="change">点我大变化</button>
  </div>
</template>

<script>
  //class 取一个 返回一个字符串
  //去多个 返回一个对象
  //一个学生列表 每个人都有成绩AB，根据当前学生的成绩匹配显示不同的颜色
  //A- red  B-green
  export default {
    data() {//data是一个函数
      return {//return过一个对象
        isRed: false,
        stus: [{ name: "jack", score: 'A' }, { name: "nose", score: 'B' }]
      }
    },
    //声明函数，属于组件对象的
    methods: {
      //包含多个函数名做key，函数体做value
      change() {
        //在script部分能使用的对象，基本emplate中也能使用，但是
        //在script中家this，template中不需要this
        this.isRed = !this.isRed;
        this.stus.push({//往stus里面添加一个人
          name:"milk",score:"A"
        })
        
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