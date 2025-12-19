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
  created() {
    this.$bus.$on("mainScroll", this.handleScroll)
  },
  beforeDestroy() {
    this.$bus.$emit("mainScroll", this.handleScroll)
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total
    },
  },
  methods: {
    async fetchData() {
      return await getCommentList({
        blogId: this.$route.params.id,
        page: this.page,
        limit: this.limit,
      })
    },
    async fetchMore() {
      if (!this.hasMore) return
      this.isLoading = true
      this.page++
      const res = await this.fetchData()
      this.data.total = res.total
      this.data.rows = this.data.rows.concat(res.rows)
      this.isLoading = false
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
    async handleScroll(dom) {
      if (this.isLoading || !dom) return
      const range = 100
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight)
      if (dec < range) {
        this.fetchMore()
      }
    },
  },
}
</script>

<style lang="less" scoped>
.blog-comment-container {
  margin: 30px 0;
}
</style>
