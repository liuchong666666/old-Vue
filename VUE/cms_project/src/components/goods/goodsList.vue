 <template>
   <div class="tmpl" style="height:577px;overflow:scroll;">
     <nav-bar title="商品列表"></nav-bar>
     <mt-loadmore 
     :top-method="loadTop" 
     :top-all-loaded="topallLoaded"
     :bottom-method="loadBottom" 
     :bottom-all-loaded="botallLoaded"
     :auto-fill="isAutoFill" ref="loadmore">

     <ul class="mui-table-view mui-grid-view">
       <li v-for="prod in prods" :key="prods.id" class="mui-table-view-cell mui-media mui-col-xs-6">
         <router-link :to="{name:'goods.detail',query:{id:prod.id}}">
           <img class="mui-media-object" v-lazy="prod.img_url">
           <div class="mui-media-body">{{prod.title}}</div>
           <div class="desc">
             <div class="sell">
               <span>￥{{prod.sell_price}}</span>
               <s>￥{{prod.market_price}}</s>
             </div>
             <div class="detail">
               <div class="hot">
                 热卖中
               </div>
               <div class="count">
                 剩{{prod.stock_quantity}}件
               </div>
             </div>
           </div>
         </router-link>
       </li>
     </ul>
     </mt-loadmore>
   </div>
 </template>
 <script>
   export default {
     data() {
       return {
         pageIndex: 1, //页码
         prods: [], //商品列表数据
         topallLoaded: false, //是否禁止触发上拉函数
         botallLoaded:false,//是否禁止下拉
         isAutoFill: false, //是否自动触发上啦
       }
     },
     created() {
        this.loadMore();//1
     
     },
     methods: {
       loadTop() {
        // console.log('触发了下拉');
        this.loadMore();//下拉到顶部就重新加载第一页
        this.pageIndex=1;//将pageIndex重新设置为1
       //通知下拉操作已经完结，达到顶部
        this.botallLoaded=false;
        this.$refs.loadmore.onTopLoaded();//做下拉刷新的时候，切记在下拉刷新的函数中要加行代码，否则下拉加载之后一直显示加载中，而不会加载完成。
       },
       loadBottom() {
            // console.log('触发了上拉');
            this.loadmoreConcat();//下拉到底部就追加数据
            // this.$refs.loadmore.onBottomLoaded();//通知上拉操作已经完结，达到底部
        
       },
       loadMore(){
        //    首次加载
              //发起请求获取数据填充到页面
            this.$ajax.get('getgoods?pageindex=1')
           .then(res=>{
               this.prods=res.data.message
           })
           .catch(err=>{
               console.log(err)
           })
        },
        loadmoreConcat(){
            //追加数据
            this.$ajax.get('getgoods?pageindex='+(++this.pageIndex))
           .then(res=>{
               this.prods=this.prods.concat(res.data.message);
            //通知是否还有数据，判断传过来的data是否是整10条，不是的话就表示这次传完就没勒
                if(res.data.message.length!=10){
                    //数据不到10条，就是剩余的所有了
                   this.botallLoaded=true;//禁止调用上拉函数
                   // this.topallLoaded=false;
                }
                // this.allLoaded=true;//通知上拉操作已经完结，达到底部
               this.$refs.loadmore.onBottomLoaded();//通知上拉操作已经完结，达到底部
           })
           .catch(err=>{
               console.log(err)
           })
        }
     }
   }

 </script>
 <style scoped>
   .mui-table-view.mui-grid-view .mui-table-view-cell>a:not(.mui-btn) {
     margin: 0px;
     padding: 0px;
     border: 1px solid #5c5c5c;
     box-shadow: 0 0 4px #666;
   }

   .sell>span {
     float: left;
     color: red;
     text-align: left;
   }

   .detail>.hot {
     float: left;
     text-align: left;
     font-size: 15px;
   }

   .detail>.count {
     float: right;
     text-align: right;
     font-size: 15px;
   }


   /*撑开，去除浮动没有的高度*/

   .detail {
     overflow: hidden;
   }

   .desc {
     color: rgba(92, 92, 92, 0.8);
     background-color: rgba(0, 0, 0, 0.2);
   }

   .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
     height: 200px;
   }

 </style>
