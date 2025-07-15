<template>
  <IconifyIcon v-if="!isExt" :icon="iconName" :class="svgClass" />
  <template v-else>
    <div :style="styleExternalIcon" :class="svgClass" bg-current></div>
  </template>

  <!-- <div class="masked-element"></div> -->
</template>

<script lang="ts" setup>
import { isExternal } from '@/utils/validate';
import { Icon as IconifyIcon } from '@iconify/vue'

const isExt = computed(() => isExternal(iconName))

const { iconName = '', customClass = '' } = defineProps<{ iconName: string; customClass: string }>()


const svgClass = computed(() => { customClass ? `icon ${customClass}` : 'icon' })

const styleExternalIcon = computed(() => ({
  mask: `url(${iconName}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${iconName}) no-repeat 50% 50%`,
  'mask-size': 'cover'
}))
</script>

<style>
.masked-element {
  width: 200px;
  height: 200px;
  background-color: blue;
  -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="white"/></svg>');
  mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="white"/></svg>');
}
</style>