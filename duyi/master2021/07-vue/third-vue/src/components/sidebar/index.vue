<template>
  <div class="sidebar-container">
    <div>
      <template v-if="data">
        <Avatar class="avatar-container" :url="data.avatar" :size="120" />
      </template>

      <!-- <div class="title">秩序之城</div> -->
      <div class="title">{{ data.siteTitle }}</div>
    </div>

    <menu-index></menu-index>

    <div>
      <contact></contact>

      <p class="footer">{{ data.icp }}</p>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/avatar/index.vue"
import Contact from "./contact/index.vue"
import MenuIndex from "./menu/index.vue"
import { mapState } from "vuex"

export default {
  components: { Avatar, Contact, MenuIndex },
  computed: {
    ...mapState("setting", ["data"]),
  },
}
</script>

<style lang="less" scoped>
@import "@/styles/variables.less";

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
