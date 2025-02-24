<template>
  <div>Home</div>
  <button @click="router.push({ path: '/detail', query: { id: 5 } })">跳转Detail 1</button> <br>
  <button @click="router.push({ name: 'Detail', params: { id: 3 } })">跳转Detail 2</button> <br>
  <button @click="jump">跳转Detail 3</button> <br>

  <div>
    <p>Pinia</p>
    <p>{{ counterStore.count }}</p>
    <p>{{ counterStore.doubleCount }}</p>
    <button @click="counterStore.increment">增加count</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCounterStore } from '../store/counter'

const router = useRouter()

const counterStore = useCounterStore()

const jump = () => {
  router.push({ name: 'Detail', params: { id: 1 } })
}
</script>

<style lang="scss" scoped></style>