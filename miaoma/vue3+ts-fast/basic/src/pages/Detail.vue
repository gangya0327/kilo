<template>
  Detail
  {{ $route.query.id }}
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'


onMounted(() => {
  const route = useRoute()
  console.log(route.params);
})
</script>