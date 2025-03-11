<template>
  <div>
    <p>sum：{{ sum }}</p>
    <p>name：{{ person.name }}</p>
    <p>age：{{ person.age }}</p>

    <button @click="add">加sum</button>
    <button @click="changeName">改name</button>
    <button @click="addAge">加age</button>
    <button @click="changePerson">改person</button>
  </div>
</template>

<script setup>
import { shallowRef, toRaw, } from 'vue';

const sum = shallowRef(0)
const person = shallowRef({ name: 'peter', age: 18 })
console.log('person :>> ', person);
const rawPerson = toRaw(person.value)
console.log('rawPerson :>> ', rawPerson);

function add() {
  sum.value++
}

function changeName() {
  person.value.name += '~'
}

function addAge() {
  person.value.age++
}

function changePerson() {
  person.value = { name: 'jack', age: 30 }
}
</script>
