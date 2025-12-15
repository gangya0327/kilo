<template>
  <layout>
    <blog-list></blog-list>
    <template #right>
      <blog-category></blog-category>
    </template>
  </layout>
  <!-- <right-list :list="list" @select="handleSelect"></right-list> -->
</template>

<script>
// import RightList from "./components/RightList.vue"
import Layout from "@/components/layout/index.vue"
import { getBlog, getBlogCategory } from "@/api/blog"
import BlogList from "./components/BlogList.vue"
import BlogCategory from "./components/BlogCategory.vue"

export default {
  components: { Layout, BlogList, BlogCategory },
  data() {
    return {
      list: [
        { name: "aa", isActive: true },
        {
          name: "bb",
          isActive: false,
          children: [
            {
              name: "bb-1",
              isActive: false,
              children: [
                { name: "bb-1-1", isActive: false },
                { name: "bb-1-2", isActive: false },
                { name: "bb-1-3", isActive: false },
              ],
            },
            { name: "bb-2", isActive: false },
            { name: "bb-3", isActive: false },
          ],
        },
        { name: "cc", isActive: false },
        { name: "dd", isActive: false },
      ],
    }
  },
  created() {
    getBlog({ page: 1, limit: 10 }).then((res) => {
      console.log("res :>> ", res)
    })
  },
  methods: {
    // async fetchData() {
    //   return getBlog({ page: 1, limit: 10 })
    // },
    handleSelect(item) {
      console.log(item)
    },
  },
}
</script>

<style lang="less" scoped></style>
