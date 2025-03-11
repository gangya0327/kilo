<template>
  <div class="father">
    <h3>father</h3>
    <p>房产：{{ money }}</p>
    <button @click="changeChild1Toy">修改大儿子的玩具</button>
    <button @click="changeChild2Toy">修改小儿子的书</button>
    <button @click="getChildren($refs)">获取所有儿子的数据</button>
    <Child1 ref="c1" />
    <br>
    <Child2 ref="c2" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';

const money = ref(10000);

const c1 = ref();
const c2 = ref();

function changeChild1Toy() {
  console.log(c1.value);
}

function changeChild2Toy() {
  console.log(c2.value);
}

function getChildren(refs: { [key: string]: any }) {
  for (const key in refs) {
    refs[key].age += 3
  }
}

defineExpose({ money })
</script>

<style scoped>
.father {
  padding: 5px;
  border-radius: 5px;
  background: #5c8;
}
</style>
