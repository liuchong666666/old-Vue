<template>
  <div class="details container">
    <router-link to="/" class="btn btn-default">返回</router-link>
    <h1 class="page-header">{{customer.name}}

        <span class="pull-right">
            <router-link class="btn btn-primary" v-bind:to="'/edit/'+customer.id">
            编辑
            </router-link>
            <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">删除</button>
        </span>
    </h1>
    <ul class="list-group">
            <li class="list-group-item">
                <span class="glyphicon glyphicon-asterisk"> 
                    {{customer.phone}}
                </span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-plus"> 
                    {{customer.email}}
                </span>
            </li>
        </ul>
    
        <ul class="list-group">
            <li class="list-group-item">
                <span class="glyphicon glyphicon-asterisk">
                    {{customer.education}}
                </span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-plus"> 
                    {{customer.graduationschool}}
                </span>
            </li>
    
            <li class="list-group-item">
                <span class="glyphicon glyphicon-asterisk"> 
                    {{customer.profession}}
                </span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-plus"> 
                    {{customer.profile}}
                </span>
            </li>
        </ul>
  </div>
</template>
<script>
  export default {
    name: "customerdetails",
    data() {
      return {
        customer: ''
      }
    },
    methods: {
      fetchCustomer(id) {
        this.$ajax.get('http://localhost:3000/users/' + id)
          .then(res => {
            console.log(res.data)
            this.customer = res.data
          })
          .catch(err => {
            console.log(err)
          })
      },
      deleteCustomer(id){
        // console.log(id)
        this.$ajax.delete('http://localhost:3000/users/'+id)
        .then(res=>{
            this.$router.push({path:'/',query:{alert:"用户删除成功"}});
        })
      }
    }
    ,created(){
        this.fetchCustomer(this.$route.params.id);
    }
  }

</script>
<style>

</style>
