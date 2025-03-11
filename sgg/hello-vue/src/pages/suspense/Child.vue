slot<template>
  <div class="child">
    <h3>child</h3>
    <div>sum：{{ sum }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const sum = ref(0)
const result = await axios.get('https://v1.hitokoto.cn/?c=f&encode=text')
console.log('result.data :>> ', result.data);

</script>

<style scoped>
.child {
  padding: 5px;
  border-radius: 5px;
  background: #8af;
}
</style>
