<template>
  <div class="layout-box">
    <layout>
      <template v-slot:left>
        <div class="left">左侧</div>
      </template>
      <div class="main"> 主区域因系统运维工作需要，申请拱墅区社会治理中心智能研判项目的运维资源，主要用于部署、更新等工作因系统运维工作需要，申请拱墅区社会治理中心智能研判项目的运维资源，主要用于部署、更新等工作因系统运维工作需要，申请拱墅区社会治理中心智能研判项目的运维资源，主要用于部署、更新等工作  </div>
      <div class="right" slot="right">右侧</div>
    </layout>
  </div>
</template>

<script>
import Layout from './index.vue'

export default {
  components: { Layout },
}
</script>

<style lang="less" scoped>
.layout-box {
  width: 1000px;
  height: 600px;
  border: 1px solid red;
  margin: 0 auto;
  white-space: nowrap;


  .left {
  
    width: 200px;
    height: 100%;
    background-color: #cff;
  }

  .main {
   
    width: 100%;
    height: 100%;
    background-color: #fcf;
  }

  .right {
 
    width: 150px;
    height: 100%;
    background-color: #ffc;
  }
}
</style>