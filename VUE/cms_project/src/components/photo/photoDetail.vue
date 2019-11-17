<template>
  <div class="tmpl">
    <!--  组件名navBar -->
    <nav-bar title="图片详情"></nav-bar>
    <!-- 组件名:navbar -->
    <!--  使用：navbar-->
    <div class="photo-title">
      <p v-text="imgInfo.title"></p>
      <span>发起日期：{{imgInfo.add_time|convertDate}}</span>
      <span>{{imgInfo.click}}次浏览</span>
      <span>分类：民生经济</span>
    </div>
    <!-- thumbs全局样式里面的 -->
    <div class="thumbs">
      <vue-preview :slides="imgs"></vue-preview>
    </div>
    <div class="photo-desc">
      <p v-html="imgInfo.content"></p>
    </div>

    <!-- 评论内容开始 -->
    <!-- 使用评论子组件 -->
    <!-- <comment :cid="pid"></comment> -->
    <comment :cid="pid"></comment>

    <!-- 评论内容结束 -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imgs: [], //存放缩略图
        imgInfo: {}, //详情数据对象
        pid: this.$route.params.id, //记录当前图片id
      }
    },
    created() {
      //    1:获取路由参数
      // let pid = this.$route.params.id;//被上面 cid代替了
      //  2：发起请求2个
      // 3：放上数据
      //图片详情
      this.$ajax.get('getimageInfo/' + this.pid)
        .then(res => {
          //一个id对应一个详情对象
          this.imgInfo = res.data.message[0];
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });


      //缩略图
      this.$ajax.get('getthumimages/' + this.pid)
        .then(res => {
          this.imgs = res.data.message;
          //Es6 foreaach
          this.imgs.forEach(element => {

            element.w = 600; //设置大图浏览时的宽度
            element.h = 400; //设置小图浏览时的高度
            element.src = element.src; //大图
            element.msrc = element.src; //小图

            //   element.msrc.w=60;
            //   element.msrc.h=40;
          });
        })
        .catch(err => {
          console.log(err)
        })
    },
    

  }

</script>
<style scoped>
  li {
    list-style: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  .photo-title {
    overflow: hidden;
  }

  .photo-title,
  .photo-desc {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
  }

  .photo-title p {
    color: #13c2f7;
    font-size: 20px;
    font-weight: bold;
  }

  .photo-title span {
    margin-right: 20px;
  }

  .mui-table-view.mui-grid-view.mui-grid-9 {
    background-color: white;
    border: 0;
  }

  .mui-table-view.mui-grid-view.mui-grid-9 li {
    border: 0;
  }

  .photo-desc p {
    font-size: 18px;
  }

  .mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
    width: 50px;
    padding: 2 2;
  }

  /*缩略图大小*/

  

</style>
