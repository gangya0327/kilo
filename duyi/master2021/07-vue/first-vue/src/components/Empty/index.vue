<template>
  <div class="empty-container">
    <Icon type="icon-anger" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from '../Icon/index.vue';

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
@import '~@/styles/mixin.less';

.empty-container {
  .self-center();
  color: #b4b8bc;
  text-align: center;
}

.icon-container {
  font-size: 72px;
}
</style>