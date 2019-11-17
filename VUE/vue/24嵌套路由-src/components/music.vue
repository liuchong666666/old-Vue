<template>
    <div>
         欢迎来到音乐世界
        <router-link :to="{name:'music_Oumei'}">欧美音乐</router-link>
        <router-link :to="{name:'music_Guochan'}">国产音乐</router-link>
        <!-- 变化的音乐数据 -->
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
<style>

</style>