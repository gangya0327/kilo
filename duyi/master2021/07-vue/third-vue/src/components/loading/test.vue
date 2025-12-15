<template>
  <div v-loading:a.b.c="true" class="loading-box">
    <!-- <loading></loading> -->
  </div>
</template>

<script>
import Loading from "./index.vue"

export default {
  components: { Loading },
}
</script>

<style scoped>
.loading-box {
  margin-left: 50px;
  width: 160px;
  height: 160px;
  border: 1px solid #ccc;
  /* position: relative; */
}
</style>
