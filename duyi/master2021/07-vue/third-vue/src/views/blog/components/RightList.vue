<template>
  <ul class="right-list-container">
    <li v-for="(item, index) in list" :key="index">
      <div @click="handleClick(item)">
        <span :class="{ active: item.isActive }"> {{ item.name }} </span>
        <span v-if="item.aside" class="aside">{{ item.aside }}</span>
      </div>
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
      if (!item.isActive) {
        this.$emit("select", item)
      }
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
    font-size: 14px;
    cursor: pointer;

    .active {
      color: @warn;
      font-weight: bold;
    }

    .aside {
      font-size: 12px;
      margin-left: 1em;
      color: @gray;
    }
  }
}
</style>
