<template>
  <nav class="menu-container">
    <a v-for="item in menus" :key="item.link" :href="item.link" :class="{ selected: isSelected(item) }">
      <icon :icon="item.icon" :size="20"></icon>
      <span> {{ item.title }} </span>
    </a>
  </nav>
</template>

<script>
import Icon from '@/components/icon/index.vue'


export default {
  components: { Icon },
  data() {
    return {
      menus: [
        { link: '/', title: '首页', icon: 'mdi:home' },
        { link: '/blog', title: '文章', icon: 'ri:blogger-fill', startsWith: true },
        { link: '/about', title: '关于', icon: 'ix:about-filled' },
        { link: '/project', title: ' 项目', icon: 'fluent:projection-screen-16-filled' },
        { link: '/message', title: ' 留言', icon: 'material-symbols:chat-rounded' },
      ]
    }
  },
  methods: {
    isSelected(item) {
      if (item.startsWith) {
        return location.pathname.toLocaleLowerCase().startsWith(item.link)
      } else {
        return location.pathname.toLocaleLowerCase() === item.link
      }
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

    &:hover {
      color: #fff;
    }

    &.selected {
      background: #555;
    }

    span {
      margin-left: 20px;
      font-size: 16px;
    }
  }
}
</style>