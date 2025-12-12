<template>
  <div>
    home
    <div id="test" @click="handleClick">test</div>
  </div>
</template>

<script>
import { showMessage } from '@/utils';

export default {
  methods: {
    handleClick() {
      this.$showMessage({
        content: 'hello world',
        callback: () => {
          console.log('completed');
        }
      })
    }
  }
}
</script>
