<template>
  <div class="tmpl">
    <!-- <nav-bar title="新闻详情"></nav-bar> -->
    <nav-bar :title="title"></nav-bar>
    <div class="news-title">
      <p v-text="newsDetail.title"></p>
      <div>
        <span>{{newsDetail.click}}次点击</span>
        <span>分类:民生经济</span>
        <span>添加时间:{{newsDetail.add_time|convertDate}}</span>
      </div>
    </div>
    <div class="news-content" v-html="newsDetail.content"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        newsDetail: [], //就是为了象征性的表示其数据类型
        title: '', //标题
      }
    },
    created() {
      //1:获取路由参数
      let id = this.$route.query.id;
      //2:拼接路由参数称为后台请求的URL
      this.$ajax.get('getnew/' + id)
        .then(res => {
          //3:响应回来渲染页面
          this.newsDetail = res.data.message[0]; //数组就一个数据，所以直接取0，因为通过id取到的就一个值
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        })

    },
    //官方文档---》生态系统--》vue router --》进阶：导航卫士
    beforeRouteEnter(to, from, next) {
      // console.log(from.name);
      let myTitle="";
      if (from.name === 'news.list') {
        //新闻
        myTitle="新闻详情";
      }else if(from.name === 'goods.detail'){
        //商品详情过来
        myTitle="图文介绍";
      }

      //一定调用next，不然就没有任何效果
      next(vm => {
        // 通过 `vm` 访问组件实例
        // vm.title = "测试";
        vm.title=myTitle;
      })
    }
  }

</script>
<style scoped>
  .news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
  }

  .news-title span {
    margin-right: 30px;
  }

  .news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }


  /*主体文章的左右距离*/

  .news-content {
    padding: 10 5;
  }

</style>
