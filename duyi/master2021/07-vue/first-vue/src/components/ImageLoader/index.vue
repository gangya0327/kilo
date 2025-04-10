<template>
  <div class="image-loader-container">
    <img v-if="!allDone" :src="placeholder" alt="" class="placeholder">
    <img :src="src" alt="" :style="{ opacity: originOpacity, transition: `${duration}ms` }" @load="handleLoaded">
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 2000
    },
  },
  data() {
    return {
      originLoaded: false, // 原图是否加载完成
      allDone: false, // 所有都完成
    }
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0
    }
  },
  methods: {
    handleLoaded() {
      console.log('原图加载完成');
      this.originLoaded = true
      setTimeout(() => {
        this.allDone = true
        this.$emit('load')
      }, this.duration);
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';

.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    .self-fill();
    object-fit: cover;
  }

  .placeholder {
    filter: blur(2vw)
  }
}
</style>