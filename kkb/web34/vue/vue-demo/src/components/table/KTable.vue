<script>
export default {
  data() {
    return {
      orderField: '',
      orderBy: 'desc',
    }
  },
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
  created() {
    this.columns.forEach((column) => {
      if (Object.prototype.hasOwnProperty.call(column, 'sortable')) {
        if (column.prop && this.orderField === '') {
          this.sort(column.prop, this.orderBy)
        }
      }
    })
  },
  methods: {
    sort(field, by) {
      this.orderField = field
      this.orderBy = by

      // eslint-disable-next-line vue/no-mutating-props
      this.data.sort((a, b) => {
        const v1 = a[this.orderField]
        const v2 = b[this.orderField]

        if (typeof v1 === 'number') {
          return this.orderBy === 'desc' ? v2 - v1 : v1 - v2
        }
        return this.orderBy === 'desc'
          ? v2.localeCompare(v1)
          : v1.localeCompare(v2)
      })
    },
    toggleSort(field) {
      if (this.orderField === field) {
        this.sort(field, this.orderBy === 'desc' ? 'asc' : 'desc')
      } else {
        this.sort(field, 'desc')
      }
    },
  },
  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.columns.map((column) => {
              if (Object.prototype.hasOwnProperty.call(column, 'sortable')) {
                let orderArrow = '↑↓'
                if (this.orderField === column.prop) {
                  orderArrow = this.orderBy === 'desc' ? '↓' : '↑'
                }
                return (
                  <th
                    key={column.label}
                    onClick={() => this.toggleSort(column.prop)}
                  >
                    {column.label} {orderArrow}
                  </th>
                )
              } else {
                return <th key={column.label}>{column.label}</th>
              }
            })}
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
