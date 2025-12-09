<template>
  <div class="box">
    <empty></empty>
  </div>
</template>

<script>
import Empty from './index.vue'

export default {
  components: { Empty },
}
</script>

<style scoped>
.box {
  margin-left: 50px;
  width: 160px;
  height: 160px;
  border: 1px solid #ccc;
  position: relative;
}
</style>