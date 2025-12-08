<template>
  <div id="app">
    <Avatar
      url="https://sns-webpic-qc.xhscdn.com/202512081713/e11682928b19ac989dc49f68a7ec1b3a/1040g00831kr2mded2u1g5pu41nuingh1gd0jvpg!nd_prv_wlteh_webp_3"
      :size="160" />

    <MyIcon icon="mdi:home"></MyIcon>
    <MyIcon icon="ant-design:aliwangwang-filled"></MyIcon>
    <MyIcon icon="material-symbols:in-home-mode-rounded"></MyIcon>
  </div>
</template>

<script>
import Avatar from './components/Avatar.vue'
import MyIcon from './components/MyIcon.vue'

export default {
  name: 'App',
  components: { Avatar, MyIcon }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
