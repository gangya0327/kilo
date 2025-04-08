<template>
  <i class="icon-container iconfont" :class="type"></i>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
@import url(//at.alicdn.com/t/c/font_575001_ynnwdsu3b2.css);

.iconfont {
  font-size: 30px;
}
</style>