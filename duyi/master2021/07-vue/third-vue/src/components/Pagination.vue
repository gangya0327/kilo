<template>
  <div class="pagination-container" v-if="pageNum > 1">
    <a :class="{ disabled: current === 1 }" @click="handleClick(1)">|&lt;&lt;</a>
    <a :class="{ disabled: current === 1 }" @click="handleClick(current - 1)">&lt;&lt;</a>

    <a v-for="n in numbers" :key="n" :class="{ active: current === n }">{{ n }}</a>

    <a :class="{ disabled: current === pageNum }" @click="handleClick(current + 1)">&gt;&gt;</a>
    <a :class="{ disabled: current === pageNum }" @click="handleClick(pageNum)">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 20,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    pageNum() {
      return Math.ceil(this.total / this.limit)
    },
    minNum() {
      let m = this.current - Math.floor(this.visibleNumber / 2)
      if (m <= 0) m = 1
      return m
    },
    maxNum() {
      // let m = this.current + Math.floor(this.visibleNumber / 2)
      let m = this.minNum + this.visibleNumber - 1
      if (m > this.pageNum) m = this.pageNum
      return m
    },
    numbers() {
      const numbers = []
      for (let i = this.minNum; i <= this.maxNum; i++) {
        numbers.push(i)
      }
      return numbers
    }
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) newPage = 1
      if (newPage > this.pageNum) newPage = this.pageNum
      this.$emit('pageChange', newPage)
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.pagination-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;

  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;

    &.disabled {
      color: @light;
      cursor: not-allowed;
    }

    &.active {
      color: @info;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>