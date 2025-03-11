<template>
  <div class="father">
    <h3>father</h3>
    <p>a：{{ a }}</p>
    <p>b：{{ b }}</p>
    <p>c：{{ c }}</p>
    <p>d：{{ d }}</p>
    <Child :a="a" :b="b" :c="c" :d="d" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Child from './Child.vue';

const a = ref(1)
const b = ref(2)
const c = ref(3)
const d = ref(4)
</script>

<style scoped>
.father {
  padding: 5px;
  border-radius: 5px;
  background: #5c8;
}
</style>
