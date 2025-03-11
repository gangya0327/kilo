<template>
  <div class="father">
    <h3>father</h3>
    汽车：{{ car }}
    <div>子给的玩具：{{ toy }}</div>
    <Child :car="car" :childFn="getToy" />
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import { ref } from 'vue';

const car = ref('奔驰')
const toy = ref('无')

function getToy(data: string) {
  toy.value = data
}
</script>

<style scoped>
.father {
  padding: 5px;
  border-radius: 5px;
  background: #5c8;
}
</style>
