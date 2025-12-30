<template>
  <div class="app-container">
    <div style="margin: 15px 0">
      <el-input v-model="blogtype" placeholder="请输入要添加的分类" style="width: 400px">
        <el-select slot="prepend" v-model="order" style="width: 60px">
          <el-option label="1" value="1" />
          <el-option label="2" value="2" />
          <el-option label="3" value="3" />
          <el-option label="4" value="4" />
          <el-option label="5" value="5" />
        </el-select>
      </el-input>
      <el-button type="primary" style="margin-left: 20px" @click="handleAdd">添加</el-button>
    </div>
    <el-table v-loading="listLoading" :data="data" border>
      <el-table-column label="序号" width="80">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="name" label="分类" />
      <el-table-column prop="order" label="排序" />
      <el-table-column prop="articleCount" label="文章数量" />
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

    <el-dialog title="编辑分类" top="5vh" :visible.sync="dialogFormVisible" width="400px">
      <el-form :model="form" label-width="80px">
        <el-form-item label="分类">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="排序">
          <el-select v-model="form.order" style="width: 100%">
            <el-option label="1" value="1" />
            <el-option label="2" value="2" />
            <el-option label="3" value="3" />
            <el-option label="4" value="4" />
            <el-option label="5" value="5" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getBlogType, editBlogType, addBlogType, delBlogType } from '@/api/blogType'

export default {
  data() {
    return {
      blogtype: '',
      order: 1,
      listLoading: false,
      data: [],
      dialogFormVisible: false,
      form: {
        name: '',
        order: 1,
      },
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getBlogType().then(res => {
        this.data = res.data
        this.listLoading = false
      })
    },
    handleAdd() {
      if (!this.blogtype) {
        return this.$message.error('请输入要添加的分类')
      }
      addBlogType({ name: this.blogtype, order: this.order }).then(() => {
        this.$message.success('添加成功')
        this.fetchData()
      })
    },
    handleEdit(row) {
      this.dialogFormVisible = true
      this.form = row
    },
    handleDelete(id) {
      this.$confirm('确认删除？', '提示', {
        type: 'warning',
      }).then(() => {
        delBlogType(id).then(() => {
          this.$message.success('删除成功')
          this.fetchData()
        })
      })
    },
    handleSubmit() {
      editBlogType(this.form).then(() => {
        this.dialogFormVisible = false
        this.$message.success('修改成功')
        this.fetchData()
      })
    },
  },
}
</script>
