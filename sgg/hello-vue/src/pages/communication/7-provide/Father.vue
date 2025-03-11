<template>
  <div class="father">
    <h3>father</h3>
    <p>money：{{ money }}</p>
    <p>car：{{ car.brand }} - {{ car.price }}</p>
    <Child />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, provide } from 'vue';
import Child from './Child.vue';

const money = ref(190000)
const car = reactive({
  brand: 'bmw',
  price: 3600
})

function changeMoney() {
  money.value -= 100
}

provide('mmm', { money, changeMoney })
provide('ccc', car)
</script>

<style scoped>
.father {
  padding: 5px;
  border-radius: 5px;
  background: #5c8;
}
</style>
