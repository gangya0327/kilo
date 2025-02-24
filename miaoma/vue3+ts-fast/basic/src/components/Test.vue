<template>
  <!-- <p>商品价格：<input v-model="price.value"></p>
  <p>商品数量：<input v-model="count.value"></p>
  {{ total }} -->
  <p @click="emits('update', 10)">商品价格：{{ price }}</p>
  <p>商品数量：</p>
</template>

<script setup lang="ts">
// import { reactive, computed, watch } from 'vue';

// const price = reactive({ value: 1 })
// const count = reactive({ value: 5 })

// const total = computed(() => price.value * count.value)

// watch(() => price.value, (n, o) => {
//   console.log(n, o);
// })

defineProps<{ price: number }>()
const emits = defineEmits<{ update: [value: number] }>()
</script>