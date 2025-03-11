<template>
  <div class="father">
    <h3>father</h3>
    <img
      src="https://img.36krcdn.com/hsossms/20250310/v2_675aa0ff904d46adb1d7e1113e2327b8@1743780481_oswg620886oswg1024oswg788_img_000?x-oss-process=image/format,jpg/interlace,1"
      alt="123" width="500">

    <Modal />
  </div>
</template>

<script setup lang="ts">
import Modal from './Modal.vue';
</script>

<style scoped>
.father {
  width: 600px;
  padding: 5px;
  border-radius: 5px;
  background: #5c8;
  filter: saturate(2);
}
</style>
