<template>
  <div class="father">
    <h3>father</h3>
    <Child @childFn="getData" />
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';


function getData(data: string) {
  console.log(data);
}
</script>

<style scoped>
.father {
  padding: 5px;
  border-radius: 5px;
  background: #5c8;
}
</style>
