<template>
  <ul class="data-list-container">
    <li v-for="(item, index) in list" :key="index">
      <avatar class="avatar" :url="item.avatar" :size="40"></avatar>
      <div class="data">
        <div class="nickname">{{ item.nickname }}</div>
        <div class="content">{{ item.content }}</div>
        <div class="time">{{ formatDate(item.createDate, true) }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from "@/components/avatar/index.vue"
import { formatDate } from "@/utils"

export default {
  components: { Avatar },
  props: {
    list: { type: Array, default: () => [] },
  },
  methods: {
    formatDate,
  },
}
</script>

<style lang="less" scoped>
@import "@/styles/variables.less";

.data-list-container {
  li {
    display: flex;
    border-bottom: 1px solid lighten(@gray, 20%);
    padding: 15px 0;

    .avatar {
      margin-right: 15px;
    }

    .data {
      flex: 1 1 auto;
      position: relative;

      .nickname {
        color: darken(@success, 10%);
        margin-bottom: 10px;
      }

      .content {
        font-size: 14px;
      }

      .time {
        position: absolute;
        top: 5px;
        right: 0;
        font-size: 12px;
        color: @gray;
      }
    }
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
