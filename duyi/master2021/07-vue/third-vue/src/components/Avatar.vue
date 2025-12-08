<template>
  <div>
    <img class="avatar-img" :src="url" alt="" :width="size" :height="size">
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 200
    },
  }
}
</script>

<style scoped>
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>