<template>
  <div class="test-container">
    <Index>
      <div>
        <h1>标题</h1>
        <p>这是一段插入文本</p>
      </div>
    </Index>
  </div>
</template>

<script>
import Index from './index.vue'

export default {
  name: 'Test',
  components: { Index }
}
</script>

<style scoped>
.test-container {}
</style>