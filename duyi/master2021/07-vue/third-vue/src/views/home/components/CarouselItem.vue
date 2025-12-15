<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMousemove"
    @mouseleave="handleMouseleave"
  >
    <div class="carousel-img" ref="image" :style="imagePosition">
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
      containerSize: null,
      innerSize: null,
      mouseX: 0,
      mouseY: 0,
    }
  },
  computed: {
    imagePosition() {
      if (!this.innerSize || !this.containerSize) return {}
      const extraWidth = this.innerSize.width - this.containerSize.width
      const extraHeight = this.innerSize.height - this.containerSize.height
      const left = (-extraWidth / this.containerSize.width) * this.mouseX + "px"
      const top =
        (-extraHeight / this.containerSize.height) * this.mouseY + "px"

      return { transform: `translate(${left}, ${top})` }
    },
    centerPosition() {
      return {
        left: this.containerSize.width / 2,
        top: this.containerSize.height / 2,
      }
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.offsetWidth
    this.descWidth = this.$refs.desc.offsetWidth
    this.toggleText()

    this.setSize()
    this.mouseX = this.centerPosition.left
    this.mouseY = this.centerPosition.top
    window.addEventListener("resize", this.setSize)
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize)
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
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      }
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      }
    },
    handleMousemove(e) {
      const rect = this.$refs.container.getBoundingClientRect()
      this.mouseX = e.clientX - rect.left
      this.mouseY = e.clientY - rect.top
    },
    handleMouseleave() {
      this.mouseX = this.centerPosition.left
      this.mouseY = this.centerPosition.top
    },
  },
}
</script>

<style lang="less" scoped>
@import "@/styles/variables.less";

.carousel-item-container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
  overflow: hidden;

  .carousel-img {
    width: 110%;
    height: 110%;
    position: absolute;
    left: 0;
    top: 0;
    // transition: 0.3s;
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
    top: calc(50% + 30px);
    color: lighten(@light, 20%);
  }
}
</style>
