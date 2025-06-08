<template>
  <span>Dashboard</span>

  <div class="container" text-8>
    <div class="text">我是文本内容</div>
    <el-button type="primary">按钮</el-button>
    <div i-ant-design:alipay-circle-filled></div>
    <div i-ant-design:alipay-circle-filled icon></div>
    <div i-token-branded:adp icon></div>

    <svg-icon icon-name="https://i.postimg.cc/nzLfn7pJ/pink.png"
      custom-class="text-blue-100"></svg-icon>
    <svg-icon icon-name="token-branded:adp" custom-class="text-blue-100" @click="handle"></svg-icon>
  </div>
</template>

<script lang="ts" setup>
const { proxy } = getCurrentInstance()!
const handle = () => {
  proxy?.$message('测试成功')
}
</script>
