<template>
  <div class="blog-toc-container">
    文章分类
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "../../components/RightList.vue"
import { debounce } from "@/utils"

export default {
  components: { RightList },
  props: { toc: { type: Array, required: true } },
  data() {
    return {
      activeAnchor: "article-title-0",
    }
  },
  computed: {
    // 根据 toc 得到带有 isActive 的 toc 数据
    tocWithSelect() {
      const getToc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isActive: t.anchor === this.activeAnchor,
          children: getToc(t.children),
        }))
      }
      return getToc(this.toc)
    },
    // 根据 toc 得到 doms 数据
    doms() {
      const doms = []
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor))
          if (t.children && t.children.length) {
            addToDoms(t.children)
          }
        }
      }
      addToDoms(this.toc)
      return doms
    },
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 150)
    this.$bus.$on("mainScroll", this.setSelectDebounce)
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce)
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor
    },
    setSelect(scrollDom) {
      if (!scrollDom) return
      this.activeAnchor = ""
      const range = 150
      for (const dom of this.doms) {
        if (!dom) {
          continue
        }
        const top = dom.getBoundingClientRect().top
        if (top >= 0 && top <= range) {
          // 在指定范围内
          this.activeAnchor = dom.id
          return
        } else if (top > range) {
          // 在指定范围上方
          return
        } else {
          // 在指定范围下方
          this.activeAnchor = dom.id
        }
      }
    },
  },
}
</script>

<style lang="less" scoped>
.blog-toc-container {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;

  h2 {
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 2px;
    margin: 0;
  }
}
</style>
