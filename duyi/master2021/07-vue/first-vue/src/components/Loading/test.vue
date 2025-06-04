<template>
  <div class="test-container">
    <h1>Loading</h1>
    <Loading v-show="isLoading" />
    <button @click="isLoading = !isLoading">切换</button>
  </div>
</template>

<script>
import Loading from './index.vue'

export default {
  name: 'Test',
  components: { Loading },
  data() {
    return {
      isLoading: true
    }
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