<template>
  <div class="menu-container">
    <a v-for="(item, index) in items" :key="index" :href="item.link" :class="{ selected: isSelected(item) }">
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </a>
  </div>
</template>

<script>
import Icon from '@/components/Icon/index.vue';

export default {
  components: { Icon },
  props: {
    text: {
      type: String,
      default: '无数据'
    }
  },
  data() {
    return {
      items: [
        { link: '/', title: '首页', icon: 'icon-home' },
        { link: '/blog', title: '文章', icon: 'icon-content', startWith: true },
        { link: '/about', title: '关于', icon: 'icon-koubei' },
        { link: '/project', title: '项目', icon: 'icon-card' },
        { link: '/message', title: '留言', icon: 'icon-chat' },
      ]
    }
  },
  methods: {
    isSelected(item) {
      const path = location.pathname
      if (item.startWith) {
        return path.startsWith(item.link)
      } else {
        return path === item.link
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.menu-container {
  color: @gray;
  margin: 24px 0;

  a {
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;

    .icon {
      width: 40px;
    }

    &:hover {
      color: #fff;
    }

    &.selected {
      background: darken(@words, 1%);
    }
  }
}
</style>