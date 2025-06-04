<template>
  <div class="loading-container">
    <img class="loading-img" width="60" :src="loadingIcon" alt="">
  </div>
</template>

<script>
import loadingIcon from '@/assets/loading2.svg'

export default {
  data() {
    return {
      loadingIcon
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';

.loading-container {
  font-size: 40px;
}

.loading-img {
  .self-center();
}
</style>