<template>
  <div class="test-container">
    <h1>Test</h1>
    <ImageLoader src="https://i.postimg.cc/zDRPKpdQ/avatar2.png" placeholder="https://i.postimg.cc/zDRPKpdQ/avatar2.png"
      @load="handleLoaded" />
  </div>
</template>

<script>
import ImageLoader from './index.vue'

export default {
  name: 'Test',
  components: { ImageLoader },
  methods: {
    handleLoaded() {
      console.log('handleLoaded');
    }
  }
}
</script>

<style scoped>
.test-container {
  width: 300px;
  height: 350px;
  border: 1px solid #ccc;
  margin: 0 auto;
  position: relative;
}
</style>