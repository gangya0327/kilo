<template>
  <div class="count">
    <h3>当前求和结果为：{{ sum }}</h3>
    <h3>当前求和结果为：{{ counterStore.count }}</h3>
    <h3>双倍的和结果为：{{ counterStore.doubleCount }}</h3>
    <select v-model="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCounterStore } from '@/store/counter'

const counterStore = useCounterStore()

const sum = counterStore.count
let n = ref(1)

function add() {
  // sum++
  // counterStore.count++
  counterStore.add(5)
}
</script>

<style scoped>
.count {
  padding: 10px;
  background: #98f;
  border-radius: 10px;
  box-shadow: 0 0 10px #555
}

select,
button {
  margin: 0 10px;
  height: 30px;
}
</style>