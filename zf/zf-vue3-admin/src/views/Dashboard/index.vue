<template>
  <span>Dashboard</span>

  <div class="container">
    <div class="text">我是文本内容</div>
    {{ a }}
    <el-button type="primary" @click="handle">按钮</el-button>
  </div>
</template>

<script lang="ts" setup>
const { proxy } = getCurrentInstance()!

const a = ref(123)
const handle = () => {
  console.log('proxy :>> ', proxy);
  proxy?.$message.success('测试按钮')
}
</script>

<style lang="scss" scoped></style>