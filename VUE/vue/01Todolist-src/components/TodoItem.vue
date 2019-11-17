<template>
  <li class="item" @click="handleDelete">{{content}}</li>
</template>

<script>
  export default {
    props: ['content', 'index'],
    methods: {
      handleDelete() {
        this.$emit('delete_one', this.index)//$emit子组件和父组件相互通信
      }
    }
  }
</script>

<!-- scoped作用域：只在这个组件中，其他组件没作用，，，，，如果去掉其他组件也会被影响 -->
<style scoped>
  .item {
    color: green
  }
</style>