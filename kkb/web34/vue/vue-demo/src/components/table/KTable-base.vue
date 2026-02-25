<template>
  <table>
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.label">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in rows" :key="index">
        <td v-for="(value, key) in row" :key="key">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  computed: {
    columns() {
      return this.$slots.default.map(({ data }) => {
        const { label, prop } = data.attrs
        return { label, prop }
      })
    },
    rows() {
      return this.data.map((item) => {
        const res = {}
        this.columns.forEach(({ prop }) => {
          res[prop] = item[prop]
        })
        return res
      })
    },
  },
}
</script>
