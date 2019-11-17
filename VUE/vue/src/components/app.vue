<template>
  <div> 
    <!-- <input type="text" name="" v-model="text">
    {{text}} -->
    <!-- <button @click="changeValue">改变值</button> -->
    

    单价: <input type="text" name="" v-model="price">*
    件数:  <input type="text" name="" v-model="num"> *
    折扣: <input type="text" name="" v-model="rate">=
    <!-- {{sum}} -->
    {{sum.name}}
    {{sum.price}}
  </div>
</template>
<script>


  export default {
    data() {
      return {
        // text: [],
        // persons:[
        //   {name:'jack'},
        //   {name:'rose'}
        // ]
        price:0,num:0,rate:0
      }
    },
    created() { },
    methods: {
    //  changeValue(){
    //   //  this.text='abc';
    //   this.persons[0].name="mick";
    //  }
    },

    //（vue.js api文档---watch）
    // * watch 可以对（单个）变量进行监视，也可以深度监视
    // * 如果需求是对于10个变量进行监视？
    // * 计算属性computed 可以监视多个值，并且指定返回数据，并且可以显示在页面
    // * 都是options中的根属性
    // - watch监视单个
    // - computed可以监视多个this相关属性值的改变,如果和原值一样
    // - 不会触发函数的调用，并且可以返回对象

    
    // watch:{
    //   //字符串改变，不用深度监视就可以监视
    //   text:function(newV,oldV){
    //     console.log("值改变了");
    //     console.log(newV+":"+oldV)
    //   },
    //   ////（vue.js api文档---watch） 深度监视，因为现在是数组了//该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
    //   persons:{ 
    //     handler: function (val, oldVal) { 
    //       console.log('persons改变了')
    //      },
    //     deep: true
    //   }
    // }

    // computed可以监视多个this相关属性值的改变
    computed:{
      sum(){
        console.log('触发了')
        //如果当函数内涉及到的this，相关属性发生改变以后触发，并返回一个值（可以是对象）
        // return this.price*this.num*(this.rate/100);
        return{
          name:"古龙水",
          price:this.price*this.num*(this.rate/100)
        }
        
      }
    }


  }
</script>
<style>
  .h {
    height: 100px;
    background-color: yellowgreen;
  }

  .b {
    height: 100px;
    background-color: skyblue;
  }

  .f {
    height: 100px;
    background-color: hotpink;
  }
</style>