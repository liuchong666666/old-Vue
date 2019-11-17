<template>
  <div>
    {{data}}
    <button @click="send">发请求1</button>
    <button @click="send2">发请求2</button>
    
  </div>
</template>
<script>


  export default {
    data() {
      return {
        data: []
      }
    },
    // created(){
    //     //拦截器
    //     this.$axios.get('goods/getshopcarlist/88',{
    //       headers:{
    //         accept:'get'//还是interceptors
    //         // 默认设置 defaults 范围广、权利小
    //         // * 单个请求的设置options get(url,options)  范围小、权利中
    //         // * 拦截器 范围广、权利大
    //       }
    //     })
    //     .then(res=>{
    //       console.log(res)
    //     })
    //     .catch(err=>{
    //       console.log(err)
    //     })

    // }
   // http://47.89.21.179:8080/api/goods/getshopcarlist/88这个获取购物车商品列表的接口
   // http://47.89.21.179:8080/api/getmenus品牌管理的地址
    //通过按钮来调用
    created() { },
    methods: {
      send() {
        //拦截器
        this.$axios.get('goods/getshopcarlist/88', {
          headers: {
            accept: 'get'//还是interceptors
            // 默认设置 defaults 范围广、权利小
            // * 单个请求的设置options get(url,options)  范围小、权利中
            // * 拦截器 范围广、权利大
          }
        })
          .then(res => {
            this.data=res.data.message;
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      },
      send2(){
          //拦截器
          this.$axios.get('getmenus', {
          headers: {
            accept: 'get'//还是interceptors
            // 默认设置 defaults 范围广、权利小
            // * 单个请求的设置options get(url,options)  范围小、权利中
            // * 拦截器 范围广、权利大
          }
        })
          .then(res => {
            this.data=res.data.message;
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
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