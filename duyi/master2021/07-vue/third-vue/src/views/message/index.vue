<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      title="留言板"
      :subTitle="`（${data.total}）`"
      :isLoading="isLoading"
      :list="data.rows"
      @submit="handleSubmit"
    ></MessageArea>
  </div>
</template>

<script>
import { getMessage, postMessage } from "@/api/message"
import MessageArea from "@/components/messageArea"
import fetchData from "@/mixins/fetchData"
import mainScroll from "@/mixins/mainScroll"

export default {
  components: { MessageArea },
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("messageContainer")],
  data() {
    return {
      page: 1,
      limit: 20,
    }
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll)
  },
  beforeDestroy() {
    this.$bus.$emit("mainScroll", this.handleScroll)
  },
  methods: {
    async fetchData() {
      return await getMessage({ page: this.page, limit: this.limit })
    },
    async handleSubmit(data, callback) {
      const res = await postMessage(data)
      this.data.rows.unshift(res)
      callback && callback("留言成功，感谢您的支持！")
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
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;

  .message-area-container {
    width: 700px;
    margin: 0 auto;
  }
}
</style>
