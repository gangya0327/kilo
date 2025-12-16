<template>
  <layout>
    <blog-list></blog-list>
    <template #right>
      <blog-category></blog-category>
    </template>
  </layout>
</template>

<script>
import Layout from "@/components/layout/index.vue"
import BlogList from "./components/BlogList.vue"
import BlogCategory from "./components/BlogCategory.vue"

import { getCommentList } from "@/api/blog"

export default {
  components: { Layout, BlogList, BlogCategory },
  created() {
    // getBlog(2).then((res) => {
    //   console.log(res)
    // })
    getCommentList(2).then((res) => {
      console.log(res)
    })
  },
}
</script>
