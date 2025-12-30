<template>
  <div class="app-container">
    <el-table :data="data" border>
      <el-table-column label="序号" width="80">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="title" label="标题" width="200">
        <template #default="{ row }">
          <el-tooltip placement="top" effect="dark" :hide-after="2000">
            <div slot="content">
              <el-image :src="row.thumb2" style="width: 200px" />
            </div>
            <span>{{ row.title }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="描述" />
      <el-table-column prop="scanNumber" label="浏览数" width="100" />
      <el-table-column prop="commentNumber" label="评论量" width="100" />
      <el-table-column prop="category" label="所属分类" width="100">
        <template #default="{ row }">{{ row.category ? row.category.name : '未分类' }}</template>
      </el-table-column>
      <el-table-column prop="createDate" label="创建日期">
        <template #default="{ row }">{{ new Date(row.createDate) }}</template>
      </el-table-column>
      <el-table-column label="操作" width="100" align="center">
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

    <div style="text-align: right; margin-top: 20px">
      <el-pagination
        background
        :current-page="currentPage"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        layout="prev, pager, next, total, sizes, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import { getBlog, delBlog } from '@/api/blog'
import { server_URL } from '@/utils/url'

export default {
  data() {
    return {
      currentPage: 1,
      limit: 10,
      total: 0,
      data: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getBlog({ page: this.currentPage, limit: this.limit }).then(res => {
        this.data = res.data.rows
        this.total = res.data.total
        for (const i of this.data) {
          i.thumb2 = server_URL + i.thumb
        }
      })
    },
    handleEdit(row) {
      this.$router.push({ path: '/blog/edit/' + row.id })
    },
    handleDelete(id) {
      this.$confirm('确认删除？', '提示', {
        type: 'warning',
      }).then(_ => {
        delBlog(id).then(() => {
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
