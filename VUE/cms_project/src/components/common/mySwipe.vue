<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <a :href="img.url">
          <img :src="img.img">
          <!-- <img :src="img.src"> -->

        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imgs: [], //轮播图片列表
      }
    },
    props: ['url'],
    created() {
      this.$ajax.get(this.url)
        .then(res => {
          // console.log( (res.data.message))
          // 由于首页的轮播图是img.img  而物品的轮播图是img.src，所以我把src换成img
          if (JSON.stringify(res.data.message).match(/src/)) {//如果数据中有src
              //每一项用JSON.stringify()转换成字符串，用replace替换，再用JSON.parse()转回来
            this.imgs = JSON.parse(JSON.stringify(res.data.message).replace(/src/g, "img"))
            // console.log(this.imgs)
          } else {
            this.imgs = res.data.message;
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

</script>
<style scoped>
  .mint-swipe {
    /* max-height:187px; */
    height:200px;
    max-height:287px;
  }

  .mint-swipe img {
    height: 100%;
    width:100%;
  }

</style>
