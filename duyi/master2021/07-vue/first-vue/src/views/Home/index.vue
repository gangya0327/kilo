<template>
  <div class="home-container" ref="home">
    <h1>首页</h1>
    <button @click="handleClick">sayHello</button>
  </div>
</template>

<script>
import { getBanners } from '@/api/test'

export default {
  mounted() {
    getBanners()
  },
  methods: {
    handleClick() {
      this.$showMessage({ content: '操作失败', type: 'warning', duration: 1000, container: this.$refs.home })
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  width: 300px;
  height: 500px;
  border: 1px solid;
  // margin: 100px auto;
}
</style>