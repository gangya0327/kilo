<template>
  <div class="test-container">
    <h1>Test</h1>
    <Empty />
  </div>
</template>

<script>
import Empty from './index.vue'

export default {
  name: 'Test',
  components: {
    Empty
  }
}
</script>

<style scoped>
.test-container {
  width: 500px;
  height: 400px;
  border: 1px solid #ccc;
  margin: 0 auto;
  position: relative;
}
</style>