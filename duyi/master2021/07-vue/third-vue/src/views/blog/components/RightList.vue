<template>
  <ul class="right-list-container">
    <li v-for="(item, index) in list" :key="index">
      <span :class="{ active: item.isActive }" @click="handleClick(item)">
        {{ item.name }}
      </span>
      <template v-if="item.children && item.children.length">
        <right-list :list="item.children" @select="handleClick"></right-list>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: { list: { type: Array, default: () => [] } },
  methods: {
    handleClick(item) {
      this.$emit("select", item)
    },
  },
}
</script>

<style lang="less" scoped>
@import "@/styles/variables.less";

.right-list-container {
  list-style: none;
  padding: 0;

  .right-list-container {
    margin-left: 1em;
  }

  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;

    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
</style>
