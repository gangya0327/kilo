import { defineStore } from 'pinia';

const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 101, abc: 'hello' };
  },
  actions: {
    add(value: number) {
      this.count += value;
    },
  },
  getters: {
    doubleCount(): number {
      // return state.count * 2;
      return this.count * 2;
    },
  },
});

export { useCounterStore };
