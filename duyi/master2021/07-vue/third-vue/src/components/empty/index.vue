<template>
  <div class="empty-container">
    <icon  icon="mingcute:empty-box-fill" size="50"></icon>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from '../icon/index.vue'

export default {
  components: { Icon },
  props: {
    text: {
      type: String,
      default: '无数据'
    }
  }
}
</script>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles/variables.less";

.empty-container {
  .self-center();
  color: @light;
  text-align: center;
}
</style>