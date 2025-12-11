<template>
  <div class="message-box">
    <message msg="hello vue2">
      <h1>插槽内容</h1>
      <p> 这是一段内容，这是一段内容。</p>
    </message>
  </div>
</template>

<script>
import Message from './index.vue'

export default {
  components: { Message },
}
</script>

<style scoped>
.message-box {
  margin-left: 50px;
  width: 160px;
  height: 160px;
  border: 1px solid #ccc;
  position: relative;
}
</style>