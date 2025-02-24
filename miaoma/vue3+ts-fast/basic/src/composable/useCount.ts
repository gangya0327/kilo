import { ref } from 'vue';

export const useCount = () => {
  const count = ref(0);
  return count;
};
