<template>
  <div class="app-container">
    <el-table :data="data" border>
      <el-table-column label="序号" width="80">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="title" label="标题" width="200" />
      <el-table-column prop="description" label="描述" />
      <el-table-column label="中图" width="200" align="center">
        <template #default="scope">
          <el-image style="width: 160px" :src="scope.row.midImg2" fit="fill" />
        </template>
      </el-table-column>
      <el-table-column label="大图" width="200" align="center">
        <template #default="scope">
          <el-image style="width: 160px" :src="scope.row.bigImg2" fit="fill" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100" align="center">
        <template #default="{ row }">
          <el-tooltip content="编辑" placement="top" effect="dark" :hide-after="2000">
            <el-button circle icon="el-icon-edit" type="primary" size="small" @click="handleEdit(row)" />
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑轮播图" top="5vh" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="60px">
        <el-form-item label="标题">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.description" />
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item>
              <upload v-model="form.midImg" title="中图" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item>
              <upload v-model="form.bigImg" title="大图" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getBanner, editBanner } from '@/api/banner'
import { server_URL } from '@/utils/url'
import Upload from '@/components/upload'

export default {
  components: { Upload },
  data() {
    return {
      data: [],
      dialogFormVisible: false,
      form: {
        id: '',
        migImg: '',
        bigImg: '',
        title: '',
        description: '',
      },
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getBanner().then(res => {
        this.data = res.data
        for (const i of this.data) {
          i.midImg2 = server_URL + i.midImg
          i.bigImg2 = server_URL + i.bigImg
        }
      })
    },
    handleEdit(row) {
      this.dialogFormVisible = true
      this.form = row
    },
    handleSubmit() {
      const arr = [...this.data]
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === this.form.id) {
          arr[i] = this.form
        }
      }
      editBanner(arr).then(() => {
        this.dialogFormVisible = false
        this.$message.success('修改成功')
        this.fetchData()
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
