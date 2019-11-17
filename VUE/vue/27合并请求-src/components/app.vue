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
      //将两个请求一起发送，只要有一个失败，就算失败，成功只有是全体成功
      
      function getMsg(res1,res2){
        console.log('请求成功啦');
        console.log(res1);
        console.log(res2)
      }
      
// * 合并请求
// * axios.all([请求1,请求2])
// * 分发响应  axios.spread(fn)
// * fn:对应参数(res)和请求的顺序一致
// * 应用场景:
//     - 必须保证两次请求都成功，比如，分头获取省、市的数据
// * 执行特点: 只要有一次失败就算失败，否则成功

      
      //获取省市数据的需求
      this.$axios.all([
        this.$axios.post('goods/getshopcarlist/88','content=哇哈哈哈'),
        this.$axios.get('goods/getshopcarlist/88')
      ])
      //分发响应
      .then(this.$axios.spread(getMsg))
      .catch(err=>{
        console.log(err);
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