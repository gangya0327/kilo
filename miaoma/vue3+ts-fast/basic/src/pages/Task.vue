<template>
  <h3>Task</h3>

  <input type="text" ref="inputRef">
  <!-- <button @click="handleAdd">新增</button> -->
  <button @click="handleAdd">新增</button>
  <!-- <div v-for="(t, i) in tasks" :key="i">
    <div>{{ t.name }}</div>
    <button @click="handleDelete(i)">删除</button>
  </div> -->
  <div v-for="(t, i) in useTask.tasks" :key="i">
    <router-link :to="'/task_detail/' + t.id">
      <div>{{ t.name }}</div>
      <button @click="useTask.removeTask(i)">删除</button>
    </router-link>
  </div>


</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from '../store/task';

const useTask = useTaskStore()

const inputRef = ref<HTMLInputElement | null>(null)

const handleAdd = () => {
  const taskName = inputRef?.value!.value
  inputRef.value!.value = ''
  useTask.addTask(taskName)
}
// const tasks = ref<{ name: string }[]>([])

// const handleAdd = () => {
//   const taskName = inputRef.value?.value
//   if (!taskName) return
//   inputRef.value!.value = ''
//   tasks.value.push({
//     name: 'task' + (tasks.value.length + 1) + ' ' + taskName
//   })
// }

// const handleDelete = (i: number) => {
//   tasks.value.splice(i, 1)
// }
</script>

<style lang="scss" scoped></style>