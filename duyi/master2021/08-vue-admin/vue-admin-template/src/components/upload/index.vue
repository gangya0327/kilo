<template>
  <div>
    <div class="block">{{ title }}</div>
    <el-upload
      class="avatar-uploader"
      action="/dev-api/api/upload"
      :show-file-list="false"
      :headers="headers"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="value" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon" />
    </el-upload>
  </div>
</template>

<script>
import { server_URL } from '@/utils/url'

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    headers() {
      return {
        authorization: `Bearer ${localStorage.getItem('adminToken')}`,
      }
    },
    imageUrl() {
      return server_URL + this.value
    },
  },
  methods: {
    handleAvatarSuccess(res) {
      if (res.data) {
        this.$emit('input', res.data)
      }
    },
    beforeAvatarUpload() {},
  },
}
</script>

<style>
.avatar-uploader .el-upload {
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.block {
  margin: 15px 0;
  color: #666;
}
</style>
