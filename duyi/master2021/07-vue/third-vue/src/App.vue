<template>
  <div id="app">
    <Avatar
      url="https://cdnfile.sspai.com/2025/12/05/039243279ce2b2dc867990073e67e8d1.jpg?imageView2/2/format/webp?imageMogr2/auto-orient/quality/90/ignore-error/1"
      :size="120" />
    <Avatar url="https://image.woshipm.com/2023/08/11/038990a6-380f-11ee-8f7d-00163e0b5ff3.jpg" :size="120" />

    <icon icon="mdi:home"></icon>
    <icon icon="ant-design:aliwangwang-filled"></icon>
    <icon icon="material-symbols:in-home-mode-rounded"></icon>

    <pagination :current="current" :total="total" @pageChange="handlePageChange" />

    <empty-test></empty-test>

    <image-loader-test></image-loader-test>

    <contact-test></contact-test>

    <menu-test></menu-test>
  </div>
</template>

<script>
import Avatar from './components/avatar/index.vue'
import Icon from './components/icon/index.vue'
import Pagination from './components/pagination/index.vue'
import EmptyTest from './components/empty/test.vue'
import ImageLoaderTest from './components/image-loader/test.vue'
import ContactTest from './components/contact/test.vue'
import MenuTest from './components/menu/test.vue'

export default {
  name: 'App',
  components: { Avatar, Icon, Pagination, EmptyTest, ImageLoaderTest, ContactTest, MenuTest },
  data() {
    return { current: 4, total: 83 }
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage
    }
  }
}
</script>
