<template>
  <button @click="isShow = true">展示弹窗</button>
  <Teleport to="#app">
    <div v-show="isShow" class="modal">
      <h3>弹窗标题</h3>
      <p>弹窗内容弹窗内容弹窗内容弹窗内容</p>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isShow = ref(false)
</script>

<style scoped>
.modal {
  width: 300px;
  padding: 5px;
  border-radius: 5px;
  background: #cdf;
  text-align: center;
  position: fixed;
  left: 50%;
  top: 20%;
  margin-left: -150px;
}
</style>
