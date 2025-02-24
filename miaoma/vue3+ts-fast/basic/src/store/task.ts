import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<{ id: number; name: string }[]>([]);
  const addTask = (taskName: string) => {
    if (!taskName) return;
    tasks.value.push({
      id: tasks.value.length + 1,
      name: 'task ' + (tasks.value.length + 1) + ' ' + taskName,
    });
  };
  const removeTask = (index: number) => {
    tasks.value.splice(index, 1);
  };
  return { tasks, addTask, removeTask };
});
