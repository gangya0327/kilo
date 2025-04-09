<template>
  <div class="test-container">
    <h1>Menu</h1>
    <Menu />
  </div>
</template>

<script>
import Menu from './index.vue'

export default {
  name: 'Test',
  components: { Menu }
}
</script>

<style scoped>
.test-container {
  width: 400px;
  height: 600px;
  background: #212;
  margin: 0 auto;
}
</style>