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

<script setup lang="ts">
import { Suspense } from 'vue';
import Child from './Child.vue';
</script>

<style scoped>
.father {
  width: 600px;
  padding: 5px;
  border-radius: 5px;
  background: #5c8;
}
</style>
