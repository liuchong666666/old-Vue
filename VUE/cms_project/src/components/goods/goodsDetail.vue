<template>
  <div>
    <nav-bar title="商品详情"></nav-bar>
    <div class="outer-swiper">
      <div class="swiper">
        <my-swipe :url="goodsDetailUrl"></my-swipe>
        <!-- <mt-swipe :auto="4000">
       <mt-swipe-item v-for="(img,index) in imgs" :key="index">         
            <img :src="img.src">
      </mt-swipe-item>
      </mt-swipe> -->
      </div>
    </div>
    <div class="product-desc">
      <ul>
        <li><span class="product-desc-span">
            {{prodInfo.title}}
          </span></li>
        <li class="price-li">市场价：
          <s>￥{{prodInfo.market_price}}</s> 销售价：<span>￥{{prodInfo.sell_price}}</span></li>
        <li class="number-li">购买数量：
          <span @click="substract">-</span>
          <span>{{num}}</span>
          <span @click="add">+</span></li>
        <li>
          <mt-button type="primary">立即购买</mt-button>
          <mt-button type="danger" @click="addShopcart">加入购物车</mt-button>
        </li>
      </ul>
    </div>

    <transition name="ball" @after-enter="afterEnter">
      <div class="ball" v-show="isShow" ref="ball" id="ball"></div>
    </transition>
    <div class="product-props">
      <ul>
        <li>商品参数</li>
        <li>商品货号：{{prodInfo.goods_no}}</li>
        <li>库存情况：{{prodInfo.stock_quantity}}件</li>
        <li>上架时间：{{prodInfo.add_time|convertDate}}</li>
      </ul>
    </div>
    <div class="product-info">
      <ul>
        <li>
          <mt-button type="primary" size="large" plain @click="showPicInfo">图文介绍</mt-button>
        </li>
        <li>
          <mt-button type="danger" size="large" plain @click="showProdComment">商品评论</mt-button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  //vue中组件通信的对象
  import connect from '../common/connect.js'; //父子之间的通信
  //引入prod工具对象
  import prodTools from '../common/prodTools.js';


  export default {
    data() {
      return {
        isShow: false, //控制小球是否显示
        imgs: [], //缩略图数组
        prodInfo: {}, //商品信息
        goodsDetailUrl: '', //商品详情url
        num: 1, //添加购物车的商品数量
      }
    },
    created() {

      //1:获取路由参数id
      let id = this.$route.query.id;
      //2:获取详情数据
      // this.$ajax.get('goods/getinfo/'+id)
      // .then(res=>{
      //   this.prodInfo=res.data.message[0];
      // })
      // .catch(err=>{
      //     console.log(err)
      // })
      //3：获取轮播图数据
      // this.$ajax.get('getthumimages/'+id)
      // .then(res=>{
      //    this.imgs=res.data.message;
      // })
      // .catch(err=>{
      //     console.log(err)
      // })

      //拼接url//传递给子组件
      this.goodsDetailUrl = 'getthumimages/' + id;

      //使用合并请求
      this.$ajax.all([
          this.$ajax.get('goods/getinfo/' + id)
          // ,this.$ajax.get('getthumimages/'+id)
        ])
        //分发响应
        // .then(this.$ajax.spread((resInfo,resImg)=>{
        //由于要用轮播图组件，所以这里就注释调轮播图获取
        .then(this.$ajax.spread((resInfo) => {
          this.prodInfo = resInfo.data.message[0];
          // this.imgs=resImg.data.message;
        }))
        .catch(err => {
          console.log(err);
        })

    },
    mounted() {

      // let ballPosition = document.getElementById('ball').getBoundingClientRect(); //getBoundingClientRect();//js原生方法
      //   //获取徽标在页面中的位置 （购物车上的数量标志）
      //   let badgePosition = document.getElementById('badge').getBoundingClientRect();
      // //  console.log(badgePosition);
      //   let xDist = badgePosition.left - ballPosition.left;
      //   let yDist = badgePosition.top - ballPosition.top;
      //   console.log( badgePosition.left+","+ ballPosition.left)
      //   console.log( badgePosition.top+","+ ballPosition.top)
      //   console.log(xDist+","+yDist)
      //   document.getElementById('ball').style.transform='transform: translate3d('+xDist+','+yDist+', 0);'
      //   console.log(document.getElementById('ball').style)
    },
    methods: {
      add() {
        if (this.num >= this.prodInfo.stock_quantity) return;
        this.num++;
      },
      substract() {
        if (this.num <= 1) return;
        this.num--;
      },
      //添加购物车
      addShopcart() {




        // console.log('开始emit');
        connect.$emit('addShopcart', this.num);
        //让小球飞起来，也就是插入ball这个元素
        this.isShow = true;
        //获取小球在页面中的位置

        //调用工具对象来添加商品
        prodTools.addOrUpdate({
          id: this.prodInfo.id,
          num: this.num
        })
        //测试：输出最终数据
        // console.log(prodTools.getProds());


      },
      enter() {


      },
      afterEnter() {
        //处理过度效果进入之后的行为
        this.isShow = false; //移除元素
        //vue过度效果 必须用插入和移除， 这里移动不能最后用透明度将其隐藏，否则没法再次插入。  
      },
      showProdComment() {
        //先获取当前商品id
        let id = this.$route.query.id;
        //编程导航
        this.$router.push({
          name: 'goods.comment',
          query: {
            id
          }, //路由参数id//id:id 简写id   
        })

      },
      showPicInfo() {
        //先获取当前商品id
        let id = this.$route.query.id;
        //编程导航
        this.$router.push({
          name: 'goods.pictureInfo',
          query: {
            id
          }, //路由参数id//id:id 简写id   
        })
      },

    }
  }

</script>
<style scoped>
  /*轮播图样式*/

  /*小球样式， 官方文档搜 --》教程--》过度&动画 ---》进入/离开 & 列表过渡*/
  .ball-enter-active {
    animation: bounce-in .5s;
  }

  @keyframes bounce-in {
    0% {
      /*3d流畅性好一点*/
      transform: translate3d(0, 0, 0);
    }

    50% {
      /*x,y,z轴的位置*/
      transform: translate3d(140px, -50px, 0);
    }

    75% {
      transform: translate3d(160px, 0px, 0);
    }

    100% {
      transform: translate3d(120px, 280px, 0);
    }
  }

  .swiper {
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 8px;
    width: 95%;
    border-radius: 15px;
    overflow: hidden;
    /* height: 320px; */
  }

  .outer-swiper,
  .product-desc,
  .product-props,
  .product-info {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 3px;
  }


  /*请ulpadding*/

  .outer-swiper ul,
  .product-desc ul,
  .product-props ul,
  .product-info ul {
    padding: 0;
  }

  .product-desc ul li,
  .product-props ul li,
  .product-info ul li {
    list-style: none;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 8px;
  }

  .product-desc ul>:nth-child(1) span {
    color: blue;
    font-size: 22px;
    font-weight: bold;
  }

  .product-desc ul>:nth-child(1) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }

  .product-desc ul,
  .product-info ul,
  .product-props ul {
    padding-left: 10px;
  }

  .price-li span {
    color: red;
    font-size: 25px;
  }

  .price-li s {
    margin-right: 16px;
  }


  /*加减*/

  .number-li span {
    display: inline-block;
    border: 2px solid rgba(0, 0, 0, 0.1);
    width: 25px;
  }


  /*商品参数*/

  .product-props ul>:nth-child(1) {
    text-align: left;
  }

  .product-props ul:not(:nth-child(1)) {
    margin-left: 40px;
  }

  .product-info ul {
    margin-bottom: 70px;
    padding: 0 5;
  }

  .number-li span {
    text-align: center;
  }

  .number-li>:nth-child(2) {
    width: 40px;
  }

  .ball {
    border-radius: 50%;
    background-color: red;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 440px;
    left: 120px;
    display: inline-block;
    z-index: 9999;
  }

</style>
