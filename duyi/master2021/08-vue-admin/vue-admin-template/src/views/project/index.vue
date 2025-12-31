<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="data" border>
      <el-table-column label="序号" width="80">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="name" label="项目名称">
        <template #default="scope">
          <a :href="scope.row.url" target="_blank">{{ scope.row.name }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="项目描述" />
      <el-table-column prop="category" label="预览图" width="200">
        <template #default="scope">
          <el-image style="width: 160px" :src="scope.row.thumb2" fit="fill" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150" align="center">
        <template #default="{ row }">
          <el-tooltip content="编辑" placement="top" effect="dark" :hide-after="2000">
            <el-button circle icon="el-icon-edit" type="primary" size="small" @click="handleEdit(row)" />
          </el-tooltip>
          <el-tooltip content="删除" placement="top" effect="dark" :hide-after="2000">
            <el-button circle icon="el-icon-delete" type="danger" size="small" @click="handleDelete(row.id)" />
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getProject, delProject } from '@/api/project'
import { server_URL } from '@/utils/url'

export default {
  data() {
    return {
      listLoading: false,
      data: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getProject().then(res => {
        this.data = res.data
        for (const i of this.data) {
          i.thumb2 = server_URL + i.thumb
        }
        this.listLoading = false
      })
    },
    handleEdit(row) {
      this.$router.push({ path: '/blog/edit/' + row.id })
    },
    handleDelete(id) {
      this.$confirm('确认删除？', '提示', {
        type: 'warning',
      }).then(_ => {
        delProject(id).then(() => {
          this.$message.success('删除成功')
          this.fetchData()
        })
      })
    },
    handleSizeChange(val) {
      this.limit = val
      this.fetchData()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.fetchData()
    },
  },
}
</script>
