<template>
  <div class="blog-comment-container">
    <message-area
      title="评论列表"
      :subTitle="`（${data.total}）`"
      :list="data.rows"
      :isLoading="isLoading"
      @submit="handleSubmit"
    ></message-area>
  </div>
</template>

<script>
import MessageArea from "@/components/messageArea"
import fetchData from "@/mixins/fetchData"
import { getCommentList, addComment } from "@/api/blog"

export default {
  components: { MessageArea },
  mixins: [fetchData({ total: 0, rows: [] })],
  data() {
    return {
      page: 1,
      limit: 10,
    }
  },
  methods: {
    async fetchData() {
      return await getCommentList({
        blogId: this.$route.params.id,
        page: this.page,
        limit: this.limit,
      })
    },
    async handleSubmit(formData, callback) {
      const res = await addComment({
        ...formData,
        blogId: this.$route.params.id,
      })
      this.data.rows.unshift(res)
      this.data.total++
      callback("评论成功")
    },
  },
}
</script>

<style lang="less" scoped>
.blog-comment-container {
  margin: 30px 0;
}
</style>
