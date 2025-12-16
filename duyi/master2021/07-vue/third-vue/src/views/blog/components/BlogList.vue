<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="(item, index) in data.rows" :key="index">
        <div v-if="item.thumb" class="thumb">
          <a href="">
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </a>
        </div>
        <div class="main">
          <a href="">
            <h2>{{ item.title }}</h2>
          </a>
          <div class="aside">
            <span> 日期：{{ formatDate(item.createDate) }} </span>
            <span> 浏览量：{{ item.scanNumber }}</span>
            <span> 评论数：{{ item.commentNumber }}</span>
            <a href="/blog/category/8"> 分类 {{ item.category.name }}</a>
          </div>
          <div class="desc">{{ item.description }}</div>
        </div>
      </li>
    </ul>
    <pagination
      v-if="data.total"
      :current="routeInfo.page"
      :limit="routeInfo.limit"
      :total="data.total"
      @pageChange="handlePageChange"
    ></pagination>
  </div>
</template>

<script>
import Pagination from "@/components/pagination/index.vue"
import fetchData from "@/mixins/fetchData"
import { getBlogList } from "@/api/blog"
import { formatDate } from "@/utils"

export default {
  components: { Pagination },
  mixins: [fetchData({})],
  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1
      const page = +this.$route.query.page || 1
      const limit = +this.$route.query.limit || 10
      return { page, limit, categoryId }
    },
  },
  watch: {
    async $route() {
      this.isLoading = true
      this.$refs.container.scrollTo = 0
      this.data = await this.fetchData()
      this.isLoading = false
    },
  },
  methods: {
    async fetchData() {
      return await getBlogList(this.routeInfo)
    },
    formatDate,
    handlePageChange(newPage) {
      const query = { page: newPage, limit: this.routeInfo.limit }
      if (this.routeInfo.categoryId == -1) {
        this.$router.push({
          name: "Blog",
          query,
        })
      } else {
        this.$router.push({
          name: "BlogCategory",
          query,
          params: { categoryId: this.routeInfo.categoryId },
        })
      }
    },
  },
}
</script>

<style lang="less" scoped>
@import "@/styles/variables.less";

.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  li {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid @gray;

    .thumb {
      flex: 0 0 auto;
      margin-right: 15px;

      img {
        display: block;
        max-width: 200px;
        border-radius: 6px;
      }
    }

    .main {
      flex: 1 1 auto;
      h2 {
        margin: 0;
      }
    }
    .aside {
      font-size: 12px;
      color: @gray;
      span {
        margin-right: 15px;
      }
    }
    .desc {
      margin: 15px 0;
      font-size: 14px;
    }
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
