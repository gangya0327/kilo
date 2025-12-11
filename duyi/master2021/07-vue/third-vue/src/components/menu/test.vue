<template>
  <div class="box">
    <contact></contact>
  </div>
</template>

<script>
import Contact from './index.vue'

export default {
  components: { Contact },

}
</script>

<style lang="less" scoped>
.box {
  width: 400px;
  height: 300px;
  background: #313131;
  color: #fff;
  display: flex;
  align-items: center;
}
</style>