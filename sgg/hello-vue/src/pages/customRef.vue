<template>
  <h3>customRef</h3>
  <div>
    <p>customMessage：{{ customMessage }}</p>
    <input type="text" v-model="customMessage">
  </div>
</template>

<script setup>
import useMessageRef from '@/utils/useMessageRef';

let { customMessage } = useMessageRef('你好吗', 2000)
</script>
