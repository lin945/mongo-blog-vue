<template>
  <div class="el-container">
      <div v-on:click="onclick1">1111</div>
  </div>
</template>

<script>
export default {
name: "AdminBlogs",
methods:{
  onclick1() {
    this.$router.push({name: 'edit', query: {id: 123456}})
  }
}
}
</script>

<style scoped>

</style>