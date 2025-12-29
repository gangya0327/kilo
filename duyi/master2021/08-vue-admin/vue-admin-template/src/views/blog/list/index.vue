<template>
  <div>list</div>
</template>

<script>
import { getBanner } from '@/api/banner'

export default {
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getBanner().then(res => {
        console.log('res :>> ', res)
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
