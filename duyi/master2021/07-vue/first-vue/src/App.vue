<template>
  <div class="app-container">
    <Layout>
      <template v-slot:left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>

      <div class="main">
        <router-view></router-view>
      </div>

      <!-- <template #right>
        <div class="right">
          一段右边区域文本一段右边区域文本一段右边区域文本一段右边区域文本一段右边区域文本
        </div>
      </template> -->
    </Layout>
  </div>
</template>

<script>
import Layout from './components/Layout';
import SiteAside from './components/SiteAside';

export default {
  components: { Layout, SiteAside },
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';

.app-container {
  .self-fill();
}

.aside {
  width: 250px;
  height: 100%;
}
</style>