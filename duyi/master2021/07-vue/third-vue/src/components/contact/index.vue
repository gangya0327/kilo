<template>
  <ul class="container">
    <li>
      <a href="">
        <div class="icon">
          <Icon icon="mdi:qqchat" size="26"></Icon>
        </div>
        <span>18768105813</span>
      </a>
      <div class="pop">
        <img :src="imgPop1" alt="">
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon icon="ri:taobao-fill"></Icon>
        </div>
        <span>15025988324</span>
      </a>
      <div class="pop">
        <img :src="imgPop2" alt="">
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon icon="ri:firefox-fill"></Icon>
        </div>
        <span>18058701249</span>
      </a>
      <div class="pop">
        <img :src="imgPop3" alt="">
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from '@/components/icon/index.vue'
import imgPop1 from '@/assets/avatar.jpeg'
import imgPop2 from '@/assets/image.jpg'
import imgPop3 from '@/assets/image2.jpeg'

export default {
  components: { Icon },
  data() {
    return {
      imgPop1,
      imgPop2,
      imgPop3,
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/variables.less';

.container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;

  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    cursor: pointer;
    position: relative;

    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }

    a {
      display: flex;
      align-items: center;

      .icon {
        font-size: 26px;
        width: 36px;
      }
    }

    .pop {
      position: absolute;
      left: 0;
      bottom: @itemHeight + 5px;
      padding: 8px;
      background-color: #fff;
      border-radius: 5px;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s;

      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
      }

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -4px;
        border-radius: 2px;
        transform: translateX(-50%) rotate(45deg);
        width: 10px;
        height: 10px;
        background-color: #fff;
      }
    }
  }
}
</style>