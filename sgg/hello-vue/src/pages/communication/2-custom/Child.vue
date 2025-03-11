slot<template>
  <div class="child">
    <h3>child</h3>
    <button @click="emit('childFn', 'hello father')">向父发起通信</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['childFn'])
</script>

<style scoped>
.child {
  padding: 5px;
  border-radius: 5px;
  background: #ff8;
}
</style>
