slot<template>
  <div class="child">
    <h3>child1</h3>
    <div>年龄：{{ age }}</div>
    <div>玩具1：{{ toy1 }}</div>
    <div>玩具2：{{ toy2 }}</div>
    <button @click="costFather($parent)">用父的钱</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const toy1 = ref('奥特曼')
const toy2 = ref('变形金刚')
const age = ref(12)

function costFather(parent: any) {
  parent.money -= 20
}

defineExpose({ toy1, toy2, age })
</script>

<style scoped>
.child {
  padding: 5px;
  border-radius: 5px;
  background: #ff8;
}
</style>
