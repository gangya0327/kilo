<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string; age: number }>()

const isOpen = ref<boolean>(false);
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>{{ age }}</p>
  <p @click="isOpen = !isOpen">开关：{{ isOpen ? '开' : '关' }}</p>
</template>
