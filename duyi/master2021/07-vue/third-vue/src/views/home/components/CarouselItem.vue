<template>
  <div class="carousel-item-container">
    <div class="carousel-img">
      <image-loader
        :origin="carousel.img"
        :thumbnail="carousel.img"
        :duration="500"
      ></image-loader>
    </div>
    <div ref="title" class="title">
      {{ carousel.title }}
    </div>
    <div ref="desc" class="desc">
      {{ carousel.description }}
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/image-loader"

export default {
  components: { ImageLoader },
  props: {
    carousel: { type: Object, required: true },
    index: { type: Number, required: true },
    activeIndex: { type: Number, required: true },
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
    }
  },
  mounted() {
    this.titleWidth = this.$refs.title.offsetWidth
    this.descWidth = this.$refs.desc.offsetWidth
    this.toggleText()
  },
  watch: {
    activeIndex() {
      this.toggleText()
    },
  },
  methods: {
    toggleText() {
      this.hideText()
      if (this.activeIndex === this.index) {
        this.showText()
      }
    },
    showText() {
      this.$refs.title.clientHeight
      this.$refs.title.style.transition = ".5s .3s"
      this.$refs.title.style.width = this.titleWidth + "px"

      this.$refs.desc.clientHeight
      this.$refs.desc.style.transition = "1s .8s ease-in-out"
      this.$refs.desc.style.width = this.descWidth + "px"
    },
    hideText() {
      this.$refs.title.style.opacity = 1
      this.$refs.title.style.width = 0

      this.$refs.desc.style.opacity = 1
      this.$refs.desc.style.width = 0
    },
  },
}
</script>

<style lang="less" scoped>
@import "@/styles/variables.less";

.carousel-item-container {
  width: 100%;
  height: 100%;
  background: #ccf;
  position: relative;

  .carousel-img {
    width: 100%;
    height: 100%;
  }
  .title,
  .desc {
    position: absolute;
    left: 30px;
    color: #fff;
    text-shadow:
      1px 0 0 rgba(0, 0, 0, 0.3),
      0 1px 0 rgba(0, 0, 0, 0.3),
      0 0 0 rgba(0, 0, 0, 0.3),
      1px 1px 0 rgba(0, 0, 0, 0.3);
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
  }
  .title {
    font-size: 2em;
    top: calc(50% - 30px);
  }
  .desc {
    font-size: 1.2em;
    top: calc(50% + 30px);
    color: lighten(@light, 20%);
  }
}
</style>
