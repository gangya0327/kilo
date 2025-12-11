<template>
  <div class="sidebar-container">
    <div>
      <Avatar class="avatar-container"
        url="https://image.woshipm.com/2023/08/11/038990a6-380f-11ee-8f7d-00163e0b5ff3.jpg" :size="120" />

      <div class="title"> 秩序之城</div>
    </div>

    <menu-index></menu-index>

    <div>
      <contact></contact>

      <p class="footer"> 浙 ICP 备 20251211 </p>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/avatar/index.vue'
import Contact from './contact/index.vue'
import MenuIndex from './menu/index.vue'

export default {
  components: { Avatar, Contact, MenuIndex }
}
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.sidebar-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .avatar-container {
    margin: 0 auto;
  }

  .title {
    font-size: 1.4em;
    color: #fff;
    text-align: center;
    margin-top: 40px;
  }

  .footer {
    text-align: center;
    font-size: 12px;
    color: @light;
  }
}
</style>