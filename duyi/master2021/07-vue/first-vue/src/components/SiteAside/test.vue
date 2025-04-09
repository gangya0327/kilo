<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from './index.vue'

export default {
  name: 'Test',
  components: { SiteAside }
}
</script>

<style scoped>
.test-container {
  width: 250px;
  border: 2px solid red;
  margin: 0 auto;
}
</style>