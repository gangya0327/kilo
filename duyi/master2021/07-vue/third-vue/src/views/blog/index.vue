<template>
  <div>
    <h2>blog</h2>
    <right-list :list="list" @select="handleSelect"></right-list>
  </div>
</template>

<script>
import RightList from "./components/RightList.vue"
import { getBlog, getBlogCategory } from "@/api/blog"

export default {
  components: { RightList },
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
