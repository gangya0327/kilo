<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span> 日期：{{ formatDate(blog.createDate) }}</span>
      <span> 浏览量：{{ blog.scanNumber }}</span>
      <a href="#data-form-container">
        <span>评论：{{ blog.scanNumber }}</span>
      </a>
      <span>{{ blog.category?.name }}</span>
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils"

export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
  },
}
</script>

<style lang="less" scoped>
@import "@/styles/variables.less";
@import "@/styles/markdown-body.css";

.blog-detail-container {
  .aside {
    font-size: 12px;
    color: @gray;

    span,
    a {
      margin-right: 15px;
    }
  }
}

.markdown-body {
  margin: 2em 0;
}
</style>
