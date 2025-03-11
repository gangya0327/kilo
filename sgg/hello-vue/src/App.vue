<script setup lang="ts">
</script>

<template>
  <div class="app">
    <nav>
      <router-link to="/home">首页</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/pinia">状态管理</router-link>
      <router-link to="/communication">组件传值</router-link>
      <router-link to="/advance">进阶</router-link>
      <router-link to="/customRef">customRef</router-link>
      <router-link to="/teleport">teleport</router-link>
      <router-link to="/suspense">suspense</router-link>
      <router-link to="/about">关于</router-link>
    </nav>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px;
}

nav {
  margin: 20px 10px;
}

nav a {
  margin-right: 20px;
}

main {
  padding: 20px;
  min-height: 400px;
  background: #eeb;
  border-radius: 10px;
}
</style>
