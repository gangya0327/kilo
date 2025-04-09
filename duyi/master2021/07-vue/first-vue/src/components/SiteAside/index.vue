<template>
  <div class="site-aside-container">
    <Avatar url="https://i.postimg.cc/zDRPKpdQ/avatar2.png" :size="120" />
    <h1 class="title">我的个人空间</h1>
    <Menu />

    <div class="footer">
      <Contact />
      <div class="copyright">备20250409</div>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import Contact from '@/components/SiteAside/Contact'
import Menu from '@/components/SiteAside/Menu'

export default {
  components: { Avatar, Contact, Menu }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  box-sizing: border-box;
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
}

.avatar-container {
  text-align: center;
  margin-top: 50px;
}

.title {
  text-align: center;
  font-size: 1.2em;
  color: #fff;
}

.footer {
  position: absolute;
  left: 0;
  bottom: 10px;
  width: 100%;

  .copyright {
    text-align: center;
    font-size: 12px;
    color: @gray;
  }
}
</style>