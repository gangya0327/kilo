<template>
  <div class="pagination-box">
    <pagination :current="current" :total="total" @pageChange="handlePageChange" />
  </div>
</template>

<script>
import Pagination from './index.vue'

export default {
  components: { Pagination },
  data() {
    return { current: 4, total: 83 }
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage
    }
  }
}
</script>
