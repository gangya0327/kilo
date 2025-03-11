slot<template>
  <div class="child">
    <h3>child2</h3>
    <div>年龄：{{ age }}</div>
    <div>书1：{{ book1 }}</div>
    <div>书2：{{ book2 }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const book1 = ref('西游记')
const book2 = ref('七龙珠')
const age = ref(8)

defineExpose({ book1, book2, age })
</script>

<style scoped>
.child {
  padding: 5px;
  border-radius: 5px;
  background: #cdf;
}
</style>
