slot<template>
  <div class="child">
    <h3>child2</h3>
    <div>电脑：{{ computer }}</div>
    <button @click="emitter.emit('send', computer)">给哥哥电脑用</button>
  </div>
</template>

<script setup lang="ts">
import emitter from '@/utils/emitter';
import { ref } from 'vue';
const computer = ref('联想')
</script>

<style scoped>
.child {
  padding: 5px;
  border-radius: 5px;
  background: #cdf;
}
</style>
