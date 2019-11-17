<template>
        <div class="edit container">
                <Alert v-if="alert" v-bind:message="alert"></Alert>
            <router-link class="btn btn-default" :to="'/customer/'+customer.id">返回</router-link>
          <!-- h1.page-header{添加用户}  然后tab键 -->
          <h1 class="page-header">编辑用户</h1>
          <form v-on:submit="updateCustomer">
            <div class="well">
              <h4>用户信息</h4>
              <div class="form-group">
                <label>姓名</label>
                <input type="text" class="form-control" placeholder="name" v-model="customer.name">
              </div>
              <div class="form-group">
                <label>电话</label>
                <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
              </div>
              <div class="form-group">
                <label>邮箱</label>
                <input type="text" class="form-control" placeholder="email" v-model="customer.email">
              </div>
              <div class="form-group">
                <label>学历</label>
                <input type="text" class="form-control" placeholder="education" v-model="customer.education">
              </div>
              <div class="form-group">
                <label>毕业学校</label>
                <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
              </div>
              <div class="form-group">
                <label>职业</label>
                <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
              </div>
              <div class="form-group">
                <label>个人简介</label>
                <!-- <input type="text" class="form-control" placeholder="profile" v-model="customer.profile"> -->
                <textarea class="form-control" rows="10" placeholder="profile" v-model="customer.profile"></textarea>
              </div>
              <!-- 会触发自己写的submit的 addCustomer（）方法，在上面，也会触发程序默认的submit方法 ，所以下面就写了阻止默认提交-->
              <button type="submit" class="btn btn-primary">确定</button>
            </div>
          </form>
        </div>
      </template>
      <script>
          import Alert from './Alert.vue'
        export default {
          name: 'edit',
          data() {
            return {
              customer: {},
              alert:""
            }
          },
          methods: {
            fetchCustomer(id){
                this.$ajax.get("http://localhost:3000/users/"+id)
                .then(res=>{
                    // console.log(res)
                    this.customer = res.data
                })
            },
            updateCustomer(e) {
              // console.log(123)
              if (!this.customer.name || !this.customer.phone || !this.customer.email) {
                //这三者不能为空
                this.alert= "请添加对应的信息";
              } else {
                let updateCustomer = {
                  name: this.customer.name,
                  phone: this.customer.phone,
                  email: this.customer.email,
                  education: this.customer.education,
                  graduationschool: this.customer.graduationschool,
                  profession: this.customer.profession,
                  profile: this.customer.profile
                }
                // ,newCustomer传值
                this.$ajax.put("http://localhost:3000/users/"+this.$route.params.id, updateCustomer)
                  .then(res => {
                    // console.log(res);
                    this.$router.push({
                      path: '/',
                      query: {
                        alert: "用户信息更新成功"
                      }
                    });
                  })
                e.preventDefault();
              }
              e.preventDefault(); //阻止默认提交
            }
          },
          created(){
              this.fetchCustomer(this.$route.params.id);
          },
          components:{
              Alert
          }
        }
      
      </script>
      <style scoped>
      </style>
      