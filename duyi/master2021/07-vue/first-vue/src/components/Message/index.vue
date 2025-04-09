<template>
  <div class="message-container">
    <div class="content">
      <slot></slot>
    </div>
    <button>确定</button>
    <button>关闭</button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';

.message-container {
  .self-center(fixed);
  border: 2px solid #ccc;
  padding: 20px;
}
</style>