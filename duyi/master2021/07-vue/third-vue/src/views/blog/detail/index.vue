<template>
  <layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <blog-detail v-if="data" :blog="data"></blog-detail>
      <blog-comment></blog-comment>
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <blog-toc v-if="data.toc" :toc="data.toc"></blog-toc>
      </div>
    </template>
  </layout>
</template>

<script>
import fetchData from "@/mixins/fetchData"
import { getBlog } from "@/api/blog"
import Layout from "@/components/layout/index.vue"
import BlogToc from "./components/BlogToc.vue"
import BlogDetail from "./components/BlogDetail.vue"
import BlogComment from "./components/BlogComment.vue"

export default {
  components: { Layout, BlogToc, BlogDetail, BlogComment },
  mixins: [fetchData({})],
  mounted() {
    this.$bus.$on("setMainScroll", this.handleSetMainScroll)
    this.$refs.mainContainer.addEventListener("scroll", this.handleScroll)
  },
  beforeDestroy() {
    this.$bus.$emit("mainScroll")
    this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll)
    this.$bus.$off("setMainScroll", this.handleSetMainScroll)
  },
  updated() {
    const hash = location.hash
    location.hash = ""
    setTimeout(() => {
      location.hash = hash
    }, 100)
  },
  methods: {
    async fetchData() {
      return await getBlog({ id: this.$route.params.id })
    },
    handleScroll() {
      this.$bus.$emit("mainScroll", this.$refs.mainContainer)
    },
    handleSetMainScroll(scrollTop) {
      this.$refs.mainContainer.scrollTop = scrollTop
    },
  },
}
</script>

<style lang="less" scoped>
.main-container {
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  overflow-x: hidden;
  position: relative;
  scroll-behavior: smooth;
}

.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
}
</style>
