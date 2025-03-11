<template>
  <h3>MyComponent</h3>
  <div>modelValue: {{ modelValue }}</div>
  <input type="text" :value="modelValue" @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)">
</template>

<script setup lang="ts">
defineProps(['modelValue'])
const emit = defineEmits<
  { (event: 'update:modelValue', value: string): void }
>()
</script>