<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名称</button>
    <button @click="showPhone">查看联系方式</button>
  </div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue';
import { type Person } from '@/types'

// const name = ref('zhangsan')
let name = 'zhangsan'
const age = 21

const p: Person = { id: '12354444', name: '小明', age: 23 }

const showPhone = () => {
  console.log(123);
}
const changeName = () => {
  name = '小明'
  console.log('name :>> ', name);
}
</script>

<style scoped>
.person {
  background: skyblue;
  box-shadow: 0 0 10px #eee;
  border-radius: 10px;
  padding: 10px;
}

button {
  margin: 0 10px;
}
</style>