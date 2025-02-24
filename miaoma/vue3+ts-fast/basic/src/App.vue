<script setup lang="ts">
import { ref } from 'vue';
// import HelloWorld from './components/HelloWorld.
// vue'
import Test from './components/Test.vue'
import SlotDemo from './components/SlotDemo.vue'

const price = ref(1)
</script>

<template>

  <HelloWorld :msg="'123'" :age=20 />

  <Test :price="price" @update="(v) => price += v" />
  <button @click="price++">price++</button>

  <SlotDemo>
    <p>123</p>
    <template #header="slotProps">
      <div>456</div>
      <p>{{ slotProps.age }}</p>
    </template>
  </SlotDemo>

  <router-link to="/">Home</router-link> |
  <router-link to="/detail">Detail</router-link> |
  <router-link to="/task">Task</router-link> |

  <hr>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
