<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <right-list :list="list" @select="handleSelect"></right-list>
  </div>
</template>

<script>
import RightList from "./RightList.vue"
import fetchData from "@/mixins/fetchData"
import { getBlogCategory } from "@/api/blog"

export default {
  components: { RightList },
  mixins: [fetchData([])],
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1
    },
    limit() {
      return +this.$route.query.limit || 5
    },
    list() {
      const articleCountTotal = this.data.reduce((pre, cur) => {
        return pre + cur.articleCount
      }, 0)
      const result = [
        { name: "全部", id: -1, articleCount: articleCountTotal },
        ...this.data,
      ].map((item) => ({
        ...item,
        isActive: item.id === this.categoryId,
        aside: `${item.articleCount}篇`,
      }))
      return result
    },
  },
  methods: {
    async fetchData() {
      console.log(1313)

      return await getBlogCategory()
    },
    handleSelect(item) {
      const query = { page: 1, limit: this.limit }
      if (this.$route.categoryId === -1) {
        this.$router.push({ name: "Blog", query })
      } else {
        this.$router.push({
          name: "BlogCategory",
          query,
          params: { categoryId: item.id },
        })
      }
    },
  },
}
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;

  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
