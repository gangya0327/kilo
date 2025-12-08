<template>
  <IconifyIcon :icon="icon" :style="{ width: size + 'px', height: size + 'px' }" />
</template>

<script>
import { Icon as IconifyIcon } from '@iconify/vue2'

export default {
  components: {
    IconifyIcon
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 30
    }
  },
}
</script>