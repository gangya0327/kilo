<template>
  <div class="message-area-container">
    <data-form @submit="handleSubmit"></data-form>
    <h3>
      <span>{{ title }}</span>
      <span>{{ subTitle }}</span>
    </h3>
    <data-list :list="list"></data-list>
    <div class="loading" v-loading="isLoading"></div>
  </div>
</template>

<script>
import DataForm from "./components/DataForm.vue"
import DataList from "./components/DataList.vue"

export default {
  components: { DataForm, DataList },
  props: {
    title: {
      type: String,
      default: "留言板",
    },
    subTitle: {
      type: String,
      default: "欢迎留言",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {
    handleSubmit(formData, callback) {
      console.log("formData :>> ", formData)
      this.$emit("submit", formData, callback)
    },
  },
}
</script>

<style lang="less" scoped>
.loading {
  position: relative;
  height: 100px;
}
</style>
