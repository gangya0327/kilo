<template>
  <div class="loading-container">
    <img src="@/assets/loading.svg" alt="" />
  </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles/variables.less";

.loading-container {
  .self-center();
  color: @light;
}
</style>
