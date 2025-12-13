<template>
  <div class="home-container" ref="container">
    <ul class="carousel-container" :style="{ marginTop }">
      <li v-for="item in banners" :key="item.id">
        <carousel-item></carousel-item>
      </li>
    </ul>

    <div
      v-show="activeIndex > 0"
      class="icon up"
      @click="switchTo(activeIndex - 1)"
    >
      <Icon icon="material-symbols:keyboard-arrow-up-rounded" :size="50"></Icon>
    </div>
    <div
      v-show="activeIndex < banners.length - 1"
      class="icon down"
      @click="switchTo(activeIndex + 1)"
    >
      <Icon
        icon="material-symbols:keyboard-arrow-down-rounded"
        :size="50"
      ></Icon>
    </div>
    <ul class="indicator">
      <li
        v-for="(item, index) in banners"
        :key="item.id"
        :class="{ active: index === activeIndex }"
        @click="switchTo(index)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { getBanner } from "@/api/banner"
import CarouselItem from "./components/CarouselItem.vue"
import Icon from "@/components/icon"

export default {
  components: { CarouselItem, Icon },
  data() {
    return {
      banners: [],
      activeIndex: 0, // 轮播图索引
      containerHeight: 0, // 轮播图容器高度
    }
  },
  computed: {
    marginTop() {
      return -this.activeIndex * this.containerHeight + "px"
    },
  },
  async mounted() {
    this.banners = await getBanner()
    this.containerHeight = this.$refs.container.offsetHeight
    console.log("this.containerHeight :>> ", this.containerHeight)
  },
  methods: {
    switchTo(index) {
      this.activeIndex = index
    },
  },
}
</script>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles/variables.less";

.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .carousel-container {
    width: 100%;
    height: 100%;

    li {
      width: 100%;
      height: 100%;
    }
  }

  .icon {
    .self-center();
    @gap: 15px;
    color: @light;
    cursor: pointer;
    font-size: 0;
    transform: translateX(-50%);
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.2);

    &.up {
      top: @gap;
      animation: jump 2s infinite;
    }

    &.down {
      top: auto;
      bottom: @gap;
      animation: jump 2s infinite;
    }

    &:hover {
      color: @dark;
      background-color: rgba(255, 255, 255, 0.4);
    }

    @jump-size: 5px;

    @keyframes jump {
      0% {
        transform: translate(-50%, @jump-size);
      }

      50% {
        transform: translate(-50%, -@jump-size);
      }

      100% {
        transform: translate(-50%, @jump-size);
      }
    }
  }

  .indicator {
    .self-center();
    left: auto;
    right: 20px;
    transform: translateY(-50%);

    li {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid @light;
      cursor: pointer;
      margin-bottom: 20px;

      &.active,
      &:hover {
        background: @info;
      }
    }
  }
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
