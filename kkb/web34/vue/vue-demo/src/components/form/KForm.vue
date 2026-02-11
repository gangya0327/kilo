<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  provide() {
    return {
      form: this,
    }
  },
  data() {
    return {
      error: '',
    }
  },
  methods: {
    validate(cb) {
      // 遍历执行所有 item 的校验方法
      const promises = this.$children
        .filter((item) => item.prop)
        .map((item) => item.validate())
      // 所有校验通过，则返回 true
      Promise.all(promises)
        .then(() => cb(true))
        .catch(() => cb(false))
    },
  },
}
</script>
