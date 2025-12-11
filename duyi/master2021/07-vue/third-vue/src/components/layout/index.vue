<template>
  <div class="layout-container">
    <nav class="nav">
      <slot name="left"></slot>
    </nav>

    <main class="main">
      <slot></slot>
    </main>

    <aside class="aside">
      <slot name="right"></slot>
    </aside>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '无数据'
    }
  }
}
</script>

<style lang="less" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;

  .nav,
  .aside {
    flex: 0 0 auto;
    overflow: hidden;
  }

  .main {
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>