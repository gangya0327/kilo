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
          <el-image style="width: 160px" :src="scope.row.midImg" fit="fill" />
        </template>
      </el-table-column>
      <el-table-column label="大图" width="200" align="center">
        <template #default="scope">
          <el-image style="width: 160px" :src="scope.row.bigImg" fit="fill" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100" align="center">
        <template>
          <el-tooltip content="编辑" placement="top" effect="dark" :hide-after="2000">
            <el-button circle icon="el-icon-edit" type="primary" size="small" />
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getBanner } from '@/api/banner'
import { server_URL } from '@/utils/url'

export default {
  data() {
    return {
      data: [],
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
          i.midImg = server_URL + i.midImg
          i.bigImg = server_URL + i.bigImg
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
