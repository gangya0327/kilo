<template>
  <div class="image-loader-container">
    <img v-if="!isOriginTransitioned" class="thumbnail" :src="thumbnail" alt="thumbnail" @load="handleLoadThumbnail">
    <img class="origin" :src="origin" alt="origin"
      :style="{ opacity: isOriginLoaded ? 1 : 0, transition: `${duration}ms` }" @load="handleLoad">
  </div>
</template>

<script>


export default {
  props: {
    origin: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      isOriginLoaded: false,
      isOriginTransitioned: false
    }
  },
  methods: {
    handleLoadThumbnail() {
      console.log('缩略图片已加载', Date.now());
    },
    handleLoad() {
      console.log('图片已加载', Date.now());
      this.isOriginLoaded = true;
      setTimeout(() => {
        this.isOriginTransitioned = true;
      }, this.duration + 300);
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/mixin.less';

.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;

  img {
    .self-full();
    object-fit: cover;
  }

  .thumbnail {
    transition: 100ms;
  }
}
</style>