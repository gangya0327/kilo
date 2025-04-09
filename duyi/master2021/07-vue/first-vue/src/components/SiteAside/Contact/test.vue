<template>
  <div class="test-container">
    <h1>Contact</h1>
    <Contact />
  </div>
</template>

<script>
import Contact from './index.vue'

export default {
  name: 'Test',
  components: { Contact }
}
</script>

<style scoped>
.test-container {
  width: 400px;
  height: 600px;
  border: 1px solid red;
  background-color: #111;
  margin: 0 auto;
  padding-top: 20px;
}
</style>