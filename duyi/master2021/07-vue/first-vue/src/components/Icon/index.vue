<template>
  <i class="icon-container iconfont" :class="type"></i>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'icon-smile'
    }
  }
}
</script>

<style scoped>
@import '//at.alicdn.com/t/c/font_4885896_hmw97jlzgv7.css';
/* https://www.iconfont.cn/manage/index?spm=a313x.manage_type_myicons.i1.db775f1f3.52203a81cWUNob&manage_type=myprojects&projectId=4885896 */

.iconfont {
  font-size: 22px;
}
</style>