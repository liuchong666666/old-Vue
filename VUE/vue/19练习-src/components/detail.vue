<template>
    <div calss="b">   
        我是详情
    </div>
</template>
<script>    
  export default{
      data(){
          return{
              
          }
  },
    created(){//DOM还未生成
        //获取路由参数
    //    console.log(this.$route.query)
       console.log(this.$route.query.id)
       // console.log(this.$route.params.id)
    },
    mounted(){}
        
}
</script>
<style> 

</style>