slot<template>
  <div class="child">
    <h3>grandChild</h3>
    <p>a：{{ a }}</p>
    <p>b：{{ b }}</p>
    <p>c：{{ c }}</p>
    <p>d：{{ d }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps(['a', 'b', 'c', 'd'])
</script>

<style scoped>
.child {
  padding: 5px;
  border-radius: 5px;
  background: #cdf;
}
</style>
