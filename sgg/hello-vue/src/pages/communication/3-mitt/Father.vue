<template>
  <div class="father">
    <h3>father</h3>
    <Child1 />
    <br>
    <Child2 />
  </div>
</template>

<script setup lang="ts">
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
</script>

<style scoped>
.father {
  padding: 5px;
  border-radius: 5px;
  background: #5c8;
}
</style>
