<template>
  <div>
    <!-- 请输入内容：
    <input type="text" v-model="text">
    显示：{{text | myFilter}} -->

    <!-- 测试组件的范围 -->
    <sub-vue ref="sub"></sub-vue>

    <div ref="div"></div>
  </div>
</template>
<script>
import SubVue from './components/sub.vue';

  export default {
    filters: {
      myFilter(value) {//value就是->text
        //*输入的内容帮我做一个反转
        // console.log(value);
        //转换成数组，反转数组，转换成字符串
        return value.split('').reverse().join('');
      }
    },
    data() {//data是一个函数
      return {//return过一个对象
        text: ''
      }
    },
    components:{
      subVue:SubVue
    }
  }
</script>
<style>

</style>