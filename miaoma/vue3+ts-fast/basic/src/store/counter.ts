import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useCount } from '../composable/useCount';

// export const useCounterStore = defineStore('counter', {
//   state: () => ({
//     count: 0,
//   }),
//   getters: {
//     doubleCount(state) {
//       return state.count * 2;
//     },
//   },
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
// });

export const useCounterStore = defineStore('counter', () => {
  const count = useCount();
  const doubleCount = computed(() => count.value * 2);
  const increment = () => count.value++;
  return { count, doubleCount, increment };
});
