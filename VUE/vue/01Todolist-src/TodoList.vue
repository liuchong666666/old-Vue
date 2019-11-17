<template>
  <div>
    <div>
      <input class='item' v-model="inputValue"/>
      <button @click="handleSubmit">提交</button>
    </div>
    <ul>
        <todo-item 
            v-for="(item,index) of list"
            :key="index"
            :content="item"
            :index="index"
            @delete_one="handleDelete"
            ></todo-item>
    </ul>
  </div>
</template>

<script>
  import TodoItem from './components/TodoItem'
  export default {
    // data:function(){
    //   return {
    //     inputValue:''
    //   }
    // }

    components: {
      'todo-item':TodoItem
    },
    //es6写法
    data (){
      return {
        inputValue:'',
        list:[]
      }
    },
    methods:{
      //es6写法
      handleSubmit (){
        //this指向实例 VUE底层会自动进行处理让this指向实例
        //this.list就是this.$data.list的缩写
          this.list.push(this.inputValue)
          this.inputValue=''
      },
      handleDelete (index){
        this.list.splice(index,1)
      }
    }
  }
</script>

<style>

</style>