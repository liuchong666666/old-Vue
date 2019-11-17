<template>
    <div>
        我是详情detail
    </div>
</template>
<script>


    export default {
        data() {
            return {

            }
        },
        created(){//DOM还未生成
            //获取路由参数
            //vue-router中挂载两个对象的属性
            //$route (信息数据)  $router(功能函数)
            console.log(this.$route.query);
            console.log(this.$route.params);
        },
        mounted(){//已经将数据装载到页面上去了，DOM，已经生成

        }
    }
</script>
<style>

</style>