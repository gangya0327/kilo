<template>
  <div class="container">
    <ol>
      <li><router-link to="/communication/props">props</router-link></li>
      <li><router-link to="/communication/custom">自定义事件</router-link></li>
      <li><router-link to="/communication/mitt">mitt</router-link></li>
      <li><router-link to="/communication/v-model">v-model</router-link></li>
      <li><router-link to="/communication/attr">$attr</router-link></li>
      <li><router-link to="/communication/ref">$refs，$parent</router-link></li>
      <li><router-link to="/communication/provide">provide，inject</router-link></li>
      <li><router-link to="/communication/pinia">pinia</router-link></li>
      <li><router-link to="/communication/slot">slot</router-link></li>
    </ol>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.container {
  display: flex;
}

li {
  line-height: 30px;
}

.content {
  min-height: 400px;
  margin-left: 30px;
  flex: 1;
  background: #eef;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px #aaa;
}
</style>