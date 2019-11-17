<template>
  <div>
   
    <!-- 测试组件的范围 -->
    <sub-vue ref="sub"></sub-vue>

    <div ref="myDiv">
      {{text}}
    </div>
  </div>
</template>
<script>
import SubVue from './components/sub.vue';

  export default {
    data() {//data是一个函数
      return {//return过一个对象
        text: '123'
      }
    },
    components:{
      subVue:SubVue
    },
    //组件创建后，数据已经完成初始化，但是DOM还未生成
    created(){
      //官网上叫钩子函数
      //事件的处理函数（created）
      console.log('created:',this.$refs.myDiv);
    },
    //数据装载DOM上后，各种数据已经就位，将数据渲染到DOM上，DOM已经生成
    mounted(){
      // console.log(this);
      console.log('sub:',this.$refs.sub);

      //获取组件对象，并获取到其的DOM对象
      this.$refs.sub.$el.innerHTML="hhahahhaha";

      console.log('mounted',this.$refs.myDiv);

      //涉及DOM类的操作
      //this.$refs.myDiv.innerHTML="hhaha"//操作原生DOM
      //涉及到数据的操作
      this.text='heiheihei';//操作data里面的数据
    }
  }
</script>
<style>

</style>