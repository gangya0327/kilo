<template>
  <div class="home-container" ref="container" @wheel="handleScroll">
    <ul class="carousel-container" :style="{ marginTop: marginTop }" @transitionend="handleScrollEnd">
      <li v-for="item in banners" :key="item.id">
        <carousel-item :carousel="item"></carousel-item>
      </li>
    </ul>

    <div class="icon up" v-show="index > 0" @click="switchTo(index - 1)">
      <Icon type="icon-up" />
    </div>
    <div class="icon down" v-show="index < banners.length - 1" @click="switchTo(index + 1)">
      <Icon type="icon-under" />
    </div>

    <ul class="indicator">
      <li :class="{ active: index === i }" v-for="(item, i) in banners" :key="item.id" @click="switchTo(i)"></li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from '@/api/banner'
import CarouselItem from './CarouselItem';
import Icon from '@/components/Icon';

export default {
  components: { CarouselItem, Icon },
  data() {
    return { banners: [], index: 0, containerHeight: 0, isScrolling: false }
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + 'px'
    }
  },
  async created() {
    this.banners = await getBanners()
    // console.log(this.banners);
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    switchTo(i) {
      this.index = i
    },
    handleScroll(e) {
      if (this.isScrolling) return
      // 向下滚动
      if (e.deltaY > 5 && this.index < this.banners.length - 1) {
        this.isScrolling = true
        this.index++
      }
      // 向上滚动
      if (e.deltaY < -5 && this.index > 0) {
        this.isScrolling = true
        this.index--
      }
    },
    handleScrollEnd() {
      this.isScrolling = false
    },
    handleResize() {
      console.log('change');

      this.containerHeight = this.$refs.container.clientHeight
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/mixin.less';
@import '@/styles/var.less';

.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: @dark;
  overflow: hidden;

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
}

.carousel-container {
  width: 100%;
  height: 100%;
  transition: 0.3s;

  li {
    width: 100%;
    height: 100%;
  }
}

.icon {
  .self-center();
  @gap: 20px;
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  animation: jump 2s infinite alternate;

  &.up {
    top: @gap;
  }

  &.down {
    top: auto;
    bottom: @gap;
  }

  @jump: 5px;

  @keyframes jump {
    0% {
      transform: translate(-50%, @jump);
    }

    50% {
      transform: translate(-50%, -@jump);
    }

    100% {
      transform: translate(-50%, @jump);
    }
  }
}

.indicator {
  .self-center();
  left: auto;
  right: 20px;

  li {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-bottom: 15px;
    border: 1px solid #fff;
    box-sizing: border-box;
    transition: 0.5s;
    background: @words;
    cursor: pointer;

    &.active {
      background: #fff;
    }
  }
}
</style>