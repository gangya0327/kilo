<template>
  <ul class="contact-container">
    <li>
      <a href="">
        <div class="icon">
          <Icon type="icon-smile" />
        </div>
        <span>gangya0327</span>
      </a>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="icon-mail" />
        </div>
        <span>king9999427@163.com</span>
      </a>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="icon-phonebook" />
        </div>
        <span>18768105813</span>
      </a>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="icon-warn" />
        </div>
        <span>32535810</span>
      </a>
      <div class="pop">
        <img
          src="https://qrimg.jd.com/https%3A%2F%2Fitem.m.jd.com%2Fproduct%2F10097626008664.html%3Fpc_source%3Dpc_productDetail_10097626008664-118-1-4-2.png?ltype=0"
          alt="">
      </div>
    </li>
  </ul>
</template>

<script>

import Icon from '@/components/Icon/index.vue';
export default {
  components: { Icon },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;

  li {
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    position: relative;

    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }

  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  .icon {
    font-size: 26px;
    width: 36px;
  }

  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 15px;
    background-color: #fff;
    border-radius: 6px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: .3s;

    img {
      width: 150px;
      height: 150px;
    }

    &::after {
      content: '';
      width: 10px;
      height: 10px;
      background-color: #fff;
      position: absolute;
      left: 50%;
      bottom: -5px;
      transform: translateX(-50%) rotate(45deg);
    }
  }
}
</style>