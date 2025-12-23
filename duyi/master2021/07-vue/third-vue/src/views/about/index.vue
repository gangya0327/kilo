<template>
  <div class="about-container" v-loading="isLoading || !iframeLoaded">
    <iframe
      v-if="data"
      class="about-content"
      :src="data"
      frameborder="0"
      @load="iframeLoaded = true"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState("about", ["data", "isLoading"]),
  },
  data() {
    return {
      iframeLoaded: false,
    }
  },
  created() {
    this.$store.dispatch("about/fetchAbout")
  },
}
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .about-content {
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
  }
}
</style>
