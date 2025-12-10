<template>
  <div class="box">
    <image-loader :src="imgOrigin" :thumbnail="imgThumbnail"></image-loader>
  </div>
</template>

<script>
import ImageLoader from './index.vue'
import imgThumbnail from '@/assets/image1-thumbnail.jpg'
import imgOrigin from '@/assets/image1.jpg'

export default {
  components: { ImageLoader },
  data() {
    return {
      imgThumbnail,
      imgOrigin,
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 500px;
  height: 280px;
  border: 1px solid #ccc;
}
</style>