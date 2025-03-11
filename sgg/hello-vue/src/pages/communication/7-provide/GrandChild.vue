slot<template>
  <div class="child">
    <h3>grandChild</h3>
    <p>m：{{ money }}</p>
    <p>c：{{ c.brand }} - {{ c.price }}</p>
    <button @click="changeMoney">花钱</button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
const { money, changeMoney } = inject('mmm', { money: 400, changeMoney: () => { } })
const c = inject('ccc', { brand: 'benz', price: 2800 })
</script>

<style scoped>
.child {
  padding: 5px;
  border-radius: 5px;
  background: #cdf;
}
</style>
