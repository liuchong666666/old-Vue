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
      this.$axios.get('getlunbo',{
        params:{
            id:'123'
        },
            // http://47.89.21.179:8080/api/goods/getshopcarlist/88这个获取购物车商品列表的接口
        baseURL:'http://47.89.21.179:8080/api/',
        headers:{

        }
      })
      .then(res=>{
        console.log(res);
        this.data=res.data.message;
      })
      .catch(err=>{
        console.log(err);
      })
      // .finnaly(()=>{
      //   console.log('最终');
      // })



      //post
      this.$axios.post('goods/getshopcarlist/88',
     'content=1asdasdasd'
      // {
      //   content:"1asdasdasd"
      // },{
      //   //设置
      //   headers:{
      //     'content-Type':'application/x-www-form-urlencoded'
      //   }
      // }
      )
      .then(res=>{
        this.data=res.data.message;
      })
      .catch(err=>{
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