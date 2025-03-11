<template>
  <div class="child">
    <h3>child</h3>
    <div>玩具：{{ toy }}</div>
    <button @click="childFn(toy)">把玩具给父</button>
    <div>父给的汽车：{{ car }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const toy = ref('奥迪双钻')

defineProps(['car', 'childFn'])
</script>

<style scoped>
.child {
  padding: 5px;
  border-radius: 5px;
  background: #ff8;
}
</style>
