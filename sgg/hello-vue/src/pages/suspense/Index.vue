<template>
  <div class="father">
    <h3>father</h3>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        加载中...
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import Child from './Child.vue';

import { getInfo } from '@/api/user.js';
// import userService from '@/api/user.js';

// function getInfoFn() {
//   // userService.getInfo({ data: 123 }).then((res) => {
//   getInfo({ data: 123 }).then((res) => {
//     console.log('haha');
//    })
// }
// getInfoFn()
</script>

<style scoped>
.father {
  width: 600px;
  padding: 5px;
  border-radius: 5px;
  background: #5c8;
}
</style>
