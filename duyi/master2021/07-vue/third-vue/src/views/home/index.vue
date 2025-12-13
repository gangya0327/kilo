<template>
  <div>
    home
    <div id="test" @click="handleClick">test</div>
  </div>
</template>

<script>
import { test } from '@/api/test';

export default {
  mounted() {
    test().then(res => {
      // console.log('res :>> ', res);
    })
  },
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
