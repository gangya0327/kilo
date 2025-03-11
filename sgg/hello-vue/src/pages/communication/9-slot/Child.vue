slot<template>
  <div class="child">
    <h3>{{ title }}</h3>
    <h4>-默认插槽</h4>
    <slot></slot>
    <h4>-具名插槽</h4>
    <slot name="s2"></slot>
  </div>
</template>

<script setup lang="ts">
defineProps(['title'])
</script>

<style scoped>
.child {
  padding: 5px;
  border-radius: 5px;
  background: #ff8;
}

h3 {
  background: orange;
  font-weight: bold;
}
</style>
