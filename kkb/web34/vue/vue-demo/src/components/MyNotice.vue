<template>
  <div class="box" v-if="visible">
    <h3>{{ title }}</h3>
    <p class="box-content">{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    show() {
      this.visible = true
      setTimeout(() => this.hide(), this.duration)
    },
    hide() {
      this.visible = false
      this.remove()
    },
  },
}
</script>

<style scoped>
.box {
  position: fixed;
  width: 100%;
  top: 16px;
  left: 0;
  text-align: center;
  pointer-events: none;
  background-color: #fff;
  border: 2px solid #eee;
}
</style>
