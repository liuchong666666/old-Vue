<template>
    <div>
        <ul>
            <li v-for="(hero,index) in heros" :key="index">
                {{hero.name}}
                <a href="#/detail">超链接</a>
                <router-link to="/detail">详情</router-link>
                <router-link :to="{name:'detail'}">name</router-link>
                <!--查询字符串 /detail?id=0 -->
                <router-link :to="{name:'detail',query:{id:index}}">?id=0name</router-link>
                <!--path方式 /detail/0 -->
                <router-link :to="{name:'detail',params:{id:index}}">/0name</router-link>
            </li>
        </ul>
    </div>
</template>
<script>    
    export default{
        data(){
            return{
                heros:[
                    {name:"马克"} ,
                    {name:"李白"}
                ]
            }
        }
    }
</script>

<style>

</style>