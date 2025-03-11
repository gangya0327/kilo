<template>
  <div class="father">
    <h3>father</h3>
    <div>
      <input type="text" v-model="name">
      <!-- <input type="text" :value="myName" @input="myName = (<HTMLInputElement>$event.target).value"> -->
    </div>
    <hr>
    <MyComponent v-model="name" />
    <!-- <MyComponent :modelValue="name" @update:modelValue="name = $event" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MyComponent from './MyComponent.vue';

const name = ref('我是名字')
const myName = ref('另一个名字')
</script>

<style scoped>
.father {
  padding: 5px;
  border-radius: 5px;
  background: #5c8;
}

input {
  margin-right: 20px;
}
</style>
