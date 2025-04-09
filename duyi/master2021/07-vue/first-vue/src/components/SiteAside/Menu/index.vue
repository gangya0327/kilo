<template>
  <div class="menu-container">
    <router-link :exact="item.exact" v-for="(item, index) in items" :key="index" :to="item.link" active-class="selected"
      exact-active-class="">
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
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
        { link: '/', title: '首页', icon: 'icon-home', exact: true },
        { link: '/blog', title: '文章', icon: 'icon-content', exact: false },
        { link: '/project', title: '项目', icon: 'icon-card', exact: true },
        { link: '/message', title: '留言', icon: 'icon-chat', exact: true },
        { link: '/about', title: '关于', icon: 'icon-koubei', exact: true },
      ]
    }
  },
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