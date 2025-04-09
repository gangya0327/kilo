<template>
  <div class="test-container">
    <Layout>
      <template v-slot:left>
        <div class="left">一段左侧区域内容一段左侧区域内容一段左侧区域内容一段左侧区域内容一段左侧区域内容</div>
      </template>
      <!-- <template v-slot:default>bbbb</template> -->
      <div class="main">
        一段中间区域文本一段中间区域文本一段中间区域文本一段中间区域文本一段中间区域文本一段中间区域文本一段中间区域文本一段中间区域文本一段中间区域文本
      </div>
      <template #right>
        <div class="right">
          一段右边区域文本一段右边区域文本一段右边区域文本一段右边区域文本一段右边区域文本
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from './index.vue'

export default {
  name: 'Test',
  components: { Layout }
}
</script>

<style scoped>
.test-container {
  width: 1000px;
  height: 600px;
  margin: 0 auto;
  border: 2px solid red;
  white-space: nowrap;
}

.left {
  width: 200px;
  height: 100%;
  background: #5c2;
}

.main {
  width: 100%;
  height: 100%;
  background: #b55;
}

.right {
  width: 150px;
  height: 100%;
  background: #ccf;
}
</style>