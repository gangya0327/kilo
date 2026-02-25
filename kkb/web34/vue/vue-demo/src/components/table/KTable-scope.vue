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
      return this.$slots.default.map(({ data: { attrs, scopedSlots } }) => {
        const column = { ...attrs }
        if (scopedSlots) {
          column.renderCell = (row, i) => (
            <div>{scopedSlots.default({ row, $index: i })}</div>
          )
        } else {
          column.renderCell = (row) => <div>{row[column.prop]}</div>
        }
        return column
      })
    },
  },
  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.columns.map((column) => (
              <th key={column.label}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {this.columns.map((column, columnIndex) => (
                <td key={columnIndex}>{column.renderCell(row, rowIndex)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  },
}
</script>
