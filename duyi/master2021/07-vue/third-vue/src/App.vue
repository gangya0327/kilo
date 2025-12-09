<template>
  <div id="app">
    <!-- <Avatar
      url="https://sns-webpic-qc.xhscdn.com/202512081713/e11682928b19ac989dc49f68a7ec1b3a/1040g00831kr2mded2u1g5pu41nuingh1gd0jvpg!nd_prv_wlteh_webp_3"
      :size="120" /> -->

    <icon icon="mdi:home"></icon>
    <icon icon="ant-design:aliwangwang-filled"></icon>
    <icon icon="material-symbols:in-home-mode-rounded"></icon>

    <pagination :current="current" :total="total" @pageChange="handlePageChange" />

    <empty-test></empty-test>
  </div>
</template>

<script>
import Avatar from './components/Avatar.vue'
import Icon from './components/icon/index.vue'
import Pagination from './components/pagination/index.vue'
import EmptyTest from './components/empty/test.vue'

export default {
  name: 'App',
  components: { Avatar, Icon, Pagination, EmptyTest },
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
