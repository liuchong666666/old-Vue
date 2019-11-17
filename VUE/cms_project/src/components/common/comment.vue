  <template>
    <!-- 评论内容开始 -->
    <div class="photo-bottom">
      <ul>
        <li class="photo-comment">
          <div>
            <span>提交评论</span>
            <span><a @click="goBack">返回</a></span>
          </div>
        </li>
        <li class="txt-comment">
          <!-- 想拿value 可以用v-model -->
          <textarea v-model="msg"></textarea>
        </li>
        <li>
          <mt-button type="primary" @click="sendComment">发表评论</mt-button>
        </li>
        <li class="photo-comment">
          <div>
            <span>评论列表</span>
            <span>66条评论</span>
          </div>
        </li>
      </ul>
      <ul class="comment-list">
        <li v-for="(comment,index) in comments" :key="index">
          {{comment.user_name}}:{{comment.content}}{{comment.add_time|convertDate}}
        </li>

      </ul>
      <mt-button size="large" type="danger" @click="loadByPage" plain>加载更多按钮</mt-button>

    </div>

    <!-- 评论内容结束 -->

  </template>
  <script>
    export default {
      data() {
        return {
          comments: [], //存放评论
          pageIndex: 1, //页码
          msg: '', //消息发表的评论
        }
      },
      props: ['cid'], //接收从父组件传过来的cid
      created() {
        this.loadFirst();
      },
      methods: {
        //先调用这个函数
        loadFirst() {
          this.$ajax.get('getcomments/' + this.cid + '?pageindex=1')
            .then(res => {
              this.comments = res.data.message;
            })
            .catch(err => {
              console.log(err)
            })
        },
        loadByPage() {
          this.$ajax.get('getcomments/' + this.cid + '?pageindex=' + (++this.pageIndex))
            .then(res => {
              this.comments = this.comments.concat(res.data.message)
            })
            .catch(err => {
              console.log(err)
            })
        },
        sendComment() {
          //发表评论请求后台
          this.$ajax.post('postcomment/' + this.cid, 'content=' + this.msg)
            .then(res => {
              // console.log(res);
              //获取最新的第一页数据
              this.loadFirst();
              this.msg = "";
            })
            .catch(err => {
              console.log(err)
            })

        },
        goBack() {
          this.$router.go(-1);
        }

      }
    }

  </script>
  <style>
    /*评论的样式 开始*/
    .photo-comment>div span:nth-child(1) {
      float: left;
      font-weight: bold;
      margin-left: 5px;
    }

    .photo-comment>div span:nth-child(2) {
      float: right;
    }

    .photo-comment {
      height: 30px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
      line-height: 30px;
      margin-bottom: 5px;
    }

    .txt-comment {
      padding: 5 5;
    }

    .txt-comment textarea {
      margin-bottom: 5px;
    }

    .comment-list li {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      padding-bottom: 5px;
      margin-bottom: 5px;
      padding-left: 5px;
    }

    li {
      list-style: none;
    }

    ul {
      margin: 0;
      padding: 0;
    }

    /*评论的样式 结束*/

  </style>
