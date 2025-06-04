<script setup lang="ts">
import { useCounterStore } from '@/store/counter.ts'
const counter = useCounterStore()
</script>

<template>
  <router-link to="/home">首页</router-link>
  <router-link to="/about">关于</router-link>

  <router-view></router-view>

  <p>
    <span>{{ counter.count }}</span>
    <button @click="counter.increment">点击</button>
  </p>
  <p>
    <el-button type="primary">UI 按钮</el-button>
    <el-button size="large" type="success">测试按钮</el-button>
    <el-input type="text"></el-input>
  </p>
</template>

<style scoped></style>
