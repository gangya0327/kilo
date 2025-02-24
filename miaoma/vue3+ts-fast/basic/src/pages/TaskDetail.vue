<template>
  task detail
  <p>{{ task?.id }}</p>
  <p>{{ task?.name }}</p>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCurrentTask } from '../composable/useCurrentTask';

const route = useRoute();

const taskId = Number(route.params.id)
const { task } = useCurrentTask(taskId)
</script>