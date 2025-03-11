slot<template>
  <div class="child">
    <h3>child1</h3>
    <div>玩具：{{ toy }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import emitter from '@/utils/emitter';

const toy = ref('奥特曼')
emitter.on('send', (data) => { console.log('拿到了弟弟的', data) })
</script>

<style scoped>
.child {
  padding: 5px;
  border-radius: 5px;
  background: #ff8;
}
</style>
