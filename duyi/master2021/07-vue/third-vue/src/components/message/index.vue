<template>
  <div class="message-container">
    <div class="content">
      <slot></slot>
    </div>
    <button> 确定 </button>
    <button> 关闭 </button>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '无数据'
    }
  }
}
</script>

<style lang="less" scoped>
@import "@/styles/mixin.less";

.message-container {
  .self-center(fixed);
  border: 1px solid red;
  padding: 20px;
}
</style>