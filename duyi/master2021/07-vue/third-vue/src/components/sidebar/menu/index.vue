<template>
  <nav class="menu-container">
    <router-link v-for="item in menus" :key="item.link" :to="item.link" :exact="item.exact" active-class="select">
      <icon :icon="item.icon" :size="20"></icon>
      <span> {{ item.title }} </span>
    </router-link>
  </nav>
</template>

<script>
import Icon from '@/components/icon/index.vue'


export default {
  components: { Icon },
  data() {
    return {
      menus: [
        { link: '/', title: '首页', icon: 'mdi:home', exact: true },
        { link: '/blog', title: '文章', icon: 'ri:blogger-fill', startsWith: true, exact: false },
        { link: '/about', title: '关于', icon: 'ix:about-filled', exact: true },
        { link: '/project', title: ' 项目', icon: 'fluent:projection-screen-16-filled', exact: true },
        { link: '/message', title: ' 留言', icon: 'material-symbols:chat-rounded', exact: true },
      ]
    }
  },
}
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.menu-container {
  color: @gray;
  margin: 24px 0;
  width: 100%;

  a {
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    cursor: pointer;

    &:hover {
      color: #fff;
    }

    &.select {
      background: #555;
    }

    span {
      margin-left: 20px;
      font-size: 16px;
    }
  }
}
</style>