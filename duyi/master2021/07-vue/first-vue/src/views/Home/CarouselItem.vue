<template>
  <div class="carousel-item-container">
    <div class="carousel-img">
      <ImageLoader :src="'https://cdnfile.sspai.com/' + carousel.image"
        :placeholder="'https://cdnfile.sspai.com/' + carousel.image" @load="showTitle" />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader';

export default {
  components: { ImageLoader },
  props: ['carousel'],
  data() {
    return {
      titleWidth: 0
    }
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth
  },
  methods: {
    showTitle() {
      this.$refs.title.style.opacity = 1
      this.$refs.title.style.width = 0
      // 触发浏览器重绘
      this.$refs.title.clientWidth;
      this.$refs.title.style.width = this.titleWidth + 'px'

    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/var.less';

.carousel-item-container {
  background: @dark;
  color: #fff;
  width: 100%;
  height: 100%;
  position: relative;

  .carousel-img {
    width: 100%;
    height: 100%;
  }

  .title {
    position: absolute;
    top: 50px;
    left: 40px;
    font-size: 3em;
    letter-spacing: 4px;
    text-shadow: 6px 4px 0 rgba(0, 0, 0, .5);
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
    transition: 2s;
  }
}
</style>