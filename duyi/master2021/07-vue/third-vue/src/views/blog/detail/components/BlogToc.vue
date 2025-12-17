<template>
  <div class="blog-toc-container">
    文章分类
    <RightList :list="toc" />
  </div>
</template>

<script>
import RightList from "../../components/RightList.vue"
export default {
  components: { RightList },
  props: { toc: { type: Array, required: true } },
}
</script>

<style lang="less" scoped>
.blog-toc-container {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;

  h2 {
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 2px;
    margin: 0;
  }
}
</style>
