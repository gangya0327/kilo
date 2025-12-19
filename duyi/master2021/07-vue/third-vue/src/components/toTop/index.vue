<template>
  <div v-show="show" class="to-top-container" @click="handleToTop">Top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll)
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.handleScroll)
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false
        return
      }
      this.show = dom.scrollTop >= 500
    },
    handleToTop() {
      this.$bus.$emit("setMainScroll", 0)
    },
  },
}
</script>

<style lang="less" scoped>
@import "@/styles/variables.less";

.to-top-container {
  background: @primary;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  z-index: 99;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  line-height: 50px;
  color: #fff;
  text-align: center;
}
</style>
