<template>
  <div>
    {{data}}
  </div>
</template>
<script>


  export default {
    data() {
      return {
          data:[]
      }
    },
    created(){
      // console.log(this.$http)
    //  this.$http.get('http://182.254.146.100:8899/api/getlunbo')
    //   .then(res=>{
    //     this.data =res.body.message;
    //   },err=>{
    //     console.log(err)
    //   })


    // http://47.89.21.179:8080/api/goods/getshopcarlist/88这个获取购物车商品列表的接口
    //post请求
      this.$http.post('http://47.89.21.179:8080/api/goods/getshopcarlist/88',{
        content:'hahhahah'
      },{
        emulateJSON:true//改变发起的时候携带的content-type的头为application/x-www-form-urlencoded
      })
      .then(res=>{
       this.data =res.body.message;
           },err=>{
        console.log(err)
      })
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