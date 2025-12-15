export default function (defaultValue = null) {
  return {
    data() {
      return {
        isLoading: true,
        data: defaultValue,
      }
    },
    async created() {
      this.data = await this.fetchData()
      this.isLoading = false
    },
  }
}
